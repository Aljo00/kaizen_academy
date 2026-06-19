export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const form = req.body;

  try {
    const web3Key = process.env.WEB3FORMS_API_KEY;
    if (!web3Key)
      return res
        .status(500)
        .json({ error: "WEB3FORMS_API_KEY not configured" });

    // Forward to Web3Forms
    const web3Resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: web3Key, ...form }),
    });
    const web3Json = await web3Resp.json();

    // Optionally forward via Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "no-reply@yourdomain.com",
            to: [form.email || process.env.NOTIFY_EMAIL].filter(Boolean),
            subject: process.env.RESEND_SUBJECT || "Admission enquiry received",
            html: `<p>Thanks ${form.student_name || "applicant"}</p><pre>${JSON.stringify(form, null, 2)}</pre>`,
          }),
        });
      } catch (e) {
        console.error("Resend failed", e);
      }
    }

    // Optionally persist to MongoDB if configured
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri) {
      try {
        const { MongoClient } = await import("mongodb");
        const client = new MongoClient(mongoUri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await client.connect();
        const dbName = process.env.MONGODB_DB || "kaizen";
        const db = client.db(dbName);
        await db
          .collection("admissions")
          .insertOne({ ...form, receivedAt: new Date() });
        await client.close();
      } catch (e) {
        console.error("MongoDB write failed", e);
      }
    }

    return res
      .status(200)
      .json({ message: "Submission forwarded", detail: web3Json });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
