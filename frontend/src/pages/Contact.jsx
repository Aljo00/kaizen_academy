import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { SITE, ALL_COURSE_OPTIONS } from "../data/site";

export default function Contact() {
  const [form, setForm] = useState({
    student_name: "",
    parent_name: "",
    phone: "",
    whatsapp: "",
    email: "",
    course_interested: ALL_COURSE_OPTIONS[0],
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#enquiry") {
      setTimeout(
        () =>
          document
            .getElementById("enquiry")
            ?.scrollIntoView({ behavior: "smooth" }),
        300,
      );
    }
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (
      !form.student_name ||
      !form.parent_name ||
      !form.phone ||
      !form.email ||
      !form.course_interested
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        "Student Name": form.student_name,
        "Parent Name": form.parent_name,
        Phone: form.phone,
        WhatsApp: form.whatsapp,
        Email: form.email,
        "Course Interested": form.course_interested,
        Address: form.address,
        Message: form.message,
      };
      const formspreeEndpoint = "https://formspree.io/f/xvgpjzez";
      await axios.post(formspreeEndpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      setDone(true);
      toast.success("Enquiry submitted successfully.");
      setForm({
        student_name: "",
        parent_name: "",
        phone: "",
        whatsapp: "",
        email: "",
        course_interested: ALL_COURSE_OPTIONS[0],
        address: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.detail ||
          "Could not submit enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main data-testid="contact-page">
      <Toaster richColors position="top-center" />
      <section className="max-w-7xl mx-auto px-5 md:px-12 pb-10 md:pb-12 pt-28 md:pt-40">
        <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">
          Get In Touch
        </div>
        <h1 className="font-display mt-4 md:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-slate-900 max-w-4xl text-balance leading-[1.05]">
          Let's start your{" "}
          <span className="ka-gradient-text italic font-medium">Kaizen</span>{" "}
          journey.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          Have a question or ready to apply? Send us an enquiry — our team
          usually responds within a few hours.
        </p>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-12 grid lg:grid-cols-12 gap-8 md:gap-10">
          {/* INFO */}
          <div className="lg:col-span-5 space-y-5">
            <div
              className="rounded-3xl bg-white border border-slate-100 p-7"
              data-testid="contact-info"
            >
              <div className="font-display text-2xl text-slate-900">
                Contact details
              </div>
              <div className="mt-6 space-y-5">
                <a
                  href={`tel:${SITE.phones[0]}`}
                  className="flex items-start gap-4 group"
                  data-testid="contact-phone"
                >
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Call
                    </div>
                    <div className="mt-0.5 text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                      {SITE.phones[0]}
                    </div>
                    <div className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                      {SITE.phones[1]}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-4 group"
                  data-testid="contact-email"
                >
                  <div className="h-11 w-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </div>
                    <div className="mt-0.5 text-slate-900 font-medium break-all group-hover:text-rose-600 transition-colors">
                      {SITE.email}
                    </div>
                  </div>
                </a>
                <div
                  className="flex items-start gap-4"
                  data-testid="contact-address"
                >
                  <div className="h-11 w-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Visit
                    </div>
                    <div className="mt-0.5 text-slate-700">
                      {SITE.address.line1}
                    </div>
                    <div className="text-slate-700">{SITE.address.line2}</div>
                    <div className="text-slate-700">
                      {SITE.address.line3} — {SITE.address.pin}
                    </div>
                    <a
                      href={SITE.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-blue-600 font-medium hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-7 pt-6 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden border border-slate-100 bg-white"
              data-testid="contact-map"
            >
              <iframe
                title="Kaizen Academy Location"
                src={SITE.mapsEmbed}
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <motion.form
              id="enquiry"
              onSubmit={submit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl bg-white border border-slate-100 p-7 md:p-10 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.3)]"
              data-testid="enquiry-form"
            >
              <div className="absolute -top-3 left-7 px-3 py-1 rounded-full ka-gradient text-white text-[10px] tracking-[0.2em] uppercase font-semibold">
                Admission Enquiry
              </div>

              {done && (
                <div
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3"
                  data-testid="success-banner"
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium">
                      Thank you! Your enquiry was received.
                    </div>
                    <div className="text-sm opacity-80">
                      Our team will reach out to you shortly on your phone or
                      email.
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Student Name *"
                  name="student_name"
                  value={form.student_name}
                  onChange={onChange}
                  placeholder="Full name"
                  testId="field-student"
                />
                <Field
                  label="Parent Name *"
                  name="parent_name"
                  value={form.parent_name}
                  onChange={onChange}
                  placeholder="Full name"
                  testId="field-parent"
                />
                <Field
                  label="Phone Number *"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="10-digit mobile"
                  testId="field-phone"
                />
                <Field
                  label="WhatsApp Number"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={onChange}
                  placeholder="If different from phone"
                  testId="field-whatsapp"
                />
                <Field
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  testId="field-email"
                />
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Course Interested *
                  </label>
                  <select
                    name="course_interested"
                    value={form.course_interested}
                    onChange={onChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                    data-testid="field-course"
                  >
                    {ALL_COURSE_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <Field
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder="Street, town, district"
                  testId="field-address"
                />
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={4}
                    placeholder="Anything we should know?"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
                    data-testid="field-message"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-7 w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full ka-gradient text-white text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-[0_10px_30px_rgba(124,58,237,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
                data-testid="submit-enquiry-btn"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {loading ? "Sending…" : "Apply For Admission"}
              </button>
              <p className="mt-3 text-xs text-slate-500">
                By submitting, you agree to be contacted by Kaizen Academy
                regarding your enquiry.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  testId,
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-600 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
        data-testid={testId}
      />
    </div>
  );
}
