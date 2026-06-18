from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMISSION_RECIPIENT = os.environ.get('ADMISSION_RECIPIENT', 'kaizenacademy5@gmail.com')

# FastAPI app
app = FastAPI(title="Kaizen Academy API")
api_router = APIRouter(prefix="/api")

# ---------- Models ----------
class AdmissionEnquiryCreate(BaseModel):
    student_name: str = Field(..., min_length=2, max_length=120)
    parent_name: str = Field(..., min_length=2, max_length=120)
    phone: str = Field(..., min_length=6, max_length=20)
    whatsapp: Optional[str] = Field(default="", max_length=20)
    email: EmailStr
    course_interested: str = Field(..., min_length=1, max_length=120)
    address: Optional[str] = Field(default="", max_length=500)
    message: Optional[str] = Field(default="", max_length=2000)


class AdmissionEnquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    student_name: str
    parent_name: str
    phone: str
    whatsapp: str = ""
    email: EmailStr
    course_interested: str
    address: str = ""
    message: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Helpers ----------
def build_admission_email_html(enq: AdmissionEnquiry) -> str:
    return f"""
    <html>
    <body style="margin:0;padding:0;background:#f5f5f7;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;background:#f5f5f7">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0">
            <tr>
              <td style="background:linear-gradient(135deg,#1D4ED8,#7C3AED,#F43F5E);padding:28px 32px;color:#ffffff">
                <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;opacity:0.85">Kaizen Academy</div>
                <div style="font-size:22px;font-weight:700;margin-top:6px">New Admission Enquiry</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px">
                <p style="margin:0 0 18px 0;color:#475569;font-size:14px">A new admission enquiry has been submitted on the website.</p>
                <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px">
                  <tr><td style="color:#64748b;width:170px">Student Name</td><td style="color:#0f172a;font-weight:600">{enq.student_name}</td></tr>
                  <tr><td style="color:#64748b">Parent Name</td><td style="color:#0f172a;font-weight:600">{enq.parent_name}</td></tr>
                  <tr><td style="color:#64748b">Phone</td><td style="color:#0f172a;font-weight:600">{enq.phone}</td></tr>
                  <tr><td style="color:#64748b">WhatsApp</td><td style="color:#0f172a;font-weight:600">{enq.whatsapp or '-'}</td></tr>
                  <tr><td style="color:#64748b">Email</td><td style="color:#0f172a;font-weight:600">{enq.email}</td></tr>
                  <tr><td style="color:#64748b">Course Interested</td><td style="color:#0f172a;font-weight:600">{enq.course_interested}</td></tr>
                  <tr><td style="color:#64748b;vertical-align:top">Address</td><td style="color:#0f172a">{enq.address or '-'}</td></tr>
                  <tr><td style="color:#64748b;vertical-align:top">Message</td><td style="color:#0f172a">{enq.message or '-'}</td></tr>
                </table>
                <p style="margin:24px 0 0 0;font-size:12px;color:#94a3b8">Received at {enq.created_at.isoformat()}</p>
              </td>
            </tr>
            <tr>
              <td style="background:#0f172a;color:#94a3b8;padding:16px 32px;font-size:12px">
                Kaizen Academy Thrithala &middot; The Builders of Next Generation
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
    """


async def send_admission_email(enq: AdmissionEnquiry) -> Optional[str]:
    """Send admission email via Resend in a non-blocking way. Returns email id or None on failure."""
    if not resend.api_key:
        logger.warning("RESEND_API_KEY not configured; skipping email send.")
        return None
    params = {
        "from": SENDER_EMAIL,
        "to": [ADMISSION_RECIPIENT],
        "reply_to": enq.email,
        "subject": f"New Admission Enquiry — {enq.student_name} ({enq.course_interested})",
        "html": build_admission_email_html(enq),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        return result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.error(f"Resend email failed: {e}")
        return None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Kaizen Academy API", "status": "ok"}


@api_router.post("/admission-enquiry")
async def create_admission_enquiry(payload: AdmissionEnquiryCreate):
    enq = AdmissionEnquiry(**payload.model_dump())
    doc = enq.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.admission_enquiries.insert_one(doc)

    email_id = await send_admission_email(enq)

    return {
        "status": "success",
        "id": enq.id,
        "email_sent": email_id is not None,
        "email_id": email_id,
        "message": "Thank you! Your admission enquiry has been received. Our team will reach out to you shortly.",
    }


@api_router.get("/admission-enquiries", response_model=List[AdmissionEnquiry])
async def list_admission_enquiries(limit: int = 100):
    cursor = db.admission_enquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(limit)
    items = await cursor.to_list(limit)
    for item in items:
        if isinstance(item.get('created_at'), str):
            item['created_at'] = datetime.fromisoformat(item['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
