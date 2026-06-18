import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, BarChart3, Briefcase, Stethoscope, Users, UserCheck, Target, Building2, Quote, Compass, Award, Map as MapIcon, BookOpenCheck, Users2, LineChart, Instagram, Youtube, Facebook, Star } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import AnimatedCounter from '../components/AnimatedCounter';
import { SITE, ASSETS, COURSE_CATEGORIES, WHY_FEATURES, WHY_CHOOSE, TESTIMONIALS, STATS } from '../data/site';
import { useEffect, useState } from 'react';

const ICONS = { GraduationCap, BarChart3, Briefcase, Stethoscope, Users, UserCheck, Target, Building2, Compass, Award, Map: MapIcon, BookOpenCheck, Users2, LineChart };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 } }),
};

function Section({ children, className = '', id }) {
  return <section id={id} className={`relative py-24 md:py-32 ${className}`}>{children}</section>;
}

function Eyebrow({ children }) {
  return <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold"><span className="h-px w-8 bg-slate-300" />{children}</div>;
}

export default function Home() {
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32" data-testid="hero-section">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.10),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_85%_30%,rgba(244,63,94,0.10),transparent_60%)]" />
          <ParticleNetwork />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-medium text-slate-700" data-testid="hero-badge">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" /> Admissions Open · 2025 Batch
            </span>
            <h1 className="font-display mt-7 text-5xl sm:text-6xl lg:text-7xl tracking-tight font-light text-slate-900 text-balance max-w-4xl">
              The Builders of <span className="ka-gradient-text italic font-medium">Next Generation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
              Empowering students with academic excellence, career guidance and personal mentorship — at Kaizen Academy, Thrithala, learning is crafted, not delivered.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
              <Link to="/courses" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(15,23,42,0.18)]" data-testid="hero-explore-btn">
                Explore Courses <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact#enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full ka-gradient text-white text-sm font-medium hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(124,58,237,0.35)]" data-testid="hero-apply-btn">
                <Sparkles className="h-4 w-4" /> Apply For Admission
              </Link>
            </div>

            {/* hero pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {['Expert Faculty', 'Personalized Coaching', 'Career-Focused Learning', 'Proven Excellence'].map((t) => (
                <span key={t} className="px-3.5 py-1.5 text-xs rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-700">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mt-20 md:mt-24 mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white p-6 md:p-8 text-center" data-testid={`stat-${i}`}>
                  <div className="font-display text-4xl md:text-5xl font-light text-slate-900">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs tracking-[0.2em] uppercase text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5">
            <Eyebrow>Why Kaizen Academy</Eyebrow>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl font-light text-slate-900 tracking-tight text-balance">A premium learning experience designed in Thrithala.</h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Kaizen Academy nurtures students through personalised coaching, innovative teaching and career-oriented education. We don't run another tuition centre — we craft learners who think, lead and excel.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-900 group" data-testid="about-teaser-link">
              Discover our story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                  className="group relative p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.2)] transition-all"
                  data-testid={`why-feature-${i}`}>
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-xl text-slate-900">{f.title}</div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  <div className="absolute -inset-px rounded-2xl ka-gradient opacity-0 group-hover:opacity-[0.06] pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* COURSES */}
      <Section id="courses-preview" className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Eyebrow>Programs</Eyebrow>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Coaching that meets ambition.</h2>
            </div>
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group" data-testid="courses-all-link">
              View all programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURSE_CATEGORIES.map((c, i) => {
              const Icon = ICONS[c.icon];
              return (
                <motion.div key={c.id} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                  className="group relative bg-white rounded-3xl p-7 border border-slate-100 hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.3)] transition-all overflow-hidden"
                  data-testid={`course-card-${c.id}`}>
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full opacity-10 blur-2xl" style={{ background: c.accent }} />
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl text-white shadow-md" style={{ background: c.accent }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6 font-display text-2xl text-slate-900">{c.label}</div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {c.courses.slice(0, 4).map(cc => (
                      <li key={cc} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">{cc}</li>
                    ))}
                    {c.courses.length > 4 && <li className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">+{c.courses.length - 4}</li>}
                  </ul>
                  <Link to="/courses" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-slate-900 group/cta" data-testid={`course-learn-${c.id}`}>
                    Learn more <ArrowRight className="h-3.5 w-3.5 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CAMPUS */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Campus</Eyebrow>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Learn in a positive environment.</h2>
            <p className="mt-4 text-slate-600">A calm, well-lit, distraction-free campus engineered for deep focus.</p>
          </div>
          <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {[...ASSETS.campus, ...ASSETS.activities.map(a => a.src)].slice(0, 5).map((src, i) => (
              <motion.div key={src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className="mb-5 break-inside-avoid relative group overflow-hidden rounded-2xl border border-slate-100 bg-slate-100"
                data-testid={`campus-img-${i}`}>
                <img src={src} alt="Kaizen Campus" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/gallery" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_rgba(15,23,42,0.18)]" data-testid="campus-view-all-btn">
              View All Photos <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-[#0B1220] text-white relative overflow-hidden" id="why">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl ka-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-slate-400 font-semibold">Why Students Choose Us</div>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl font-light tracking-tight">A coaching ecosystem built around <em className="ka-gradient-text not-italic">you</em>.</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {WHY_CHOOSE.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={f.title} className="bg-[#0B1220] p-7 md:p-9 hover:bg-white/[0.03] transition-colors group" data-testid={`whychoose-${i}`}>
                  <div className="text-xs text-slate-500 font-mono">0{i + 1}</div>
                  <div className="mt-6 flex items-center gap-3">
                    <Icon className="h-5 w-5 text-rose-400" />
                    <div className="font-display text-xl">{f.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* FOUNDER */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 ka-gradient rounded-3xl opacity-25 blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
                <img src={ASSETS.founder} alt="Founder, Kaizen Academy" className="w-full h-full object-cover" data-testid="founder-img" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <Eyebrow>Message From The Founder</Eyebrow>
            <Quote className="mt-6 h-8 w-8 text-rose-400" />
            <p className="mt-4 font-display text-3xl md:text-4xl text-slate-900 leading-snug text-balance font-light">
              "At Kaizen Academy, our mission is to shape confident learners and future leaders through quality education and continuous improvement."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <div>
                <div className="font-display text-xl italic text-slate-900">Founder</div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-500">Kaizen Academy, Thrithala</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Eyebrow>Voices Of Our Students</Eyebrow>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Stories that keep us going.</h2>
        </div>
        <div className="mt-14 max-w-3xl mx-auto px-6">
          <motion.div key={tIndex} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.3)]" data-testid="testimonial-card">
            <div className="flex items-center gap-1 text-amber-400">{Array(5).fill(0).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-5 font-display text-2xl md:text-3xl font-light text-slate-900 leading-snug">"{TESTIMONIALS[tIndex].text}"</p>
            <div className="mt-7 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full ka-gradient text-white flex items-center justify-center font-display text-lg font-medium shadow-md">
                {TESTIMONIALS[tIndex].name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div className="font-medium text-slate-900">{TESTIMONIALS[tIndex].name}</div>
                <div className="text-xs text-slate-500">{TESTIMONIALS[tIndex].role}</div>
              </div>
            </div>
          </motion.div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTIndex(i)} className={`h-1.5 rounded-full transition-all ${i === tIndex ? 'w-8 bg-slate-900' : 'w-1.5 bg-slate-300'}`} aria-label={`Testimonial ${i + 1}`} data-testid={`testimonial-dot-${i}`} />
            ))}
          </div>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <Eyebrow>Stay Connected</Eyebrow>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Connect with Kaizen Academy.</h2>
            <p className="mt-4 text-slate-600">Latest classes, achievements, success stories and educational content — straight from our campus.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id: 'instagram', name: 'Instagram', href: SITE.social.instagram, icon: <Instagram className="h-5 w-5 text-white" />, bg: 'bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-amber-400', items: ['Latest Updates', 'Educational Reels', 'Student Activities'], cta: 'Follow' },
              { id: 'youtube', name: 'YouTube', href: SITE.social.youtube, icon: <Youtube className="h-5 w-5 text-white" />, bg: 'bg-red-600', items: ['Learning Videos', 'Career Guidance', 'Exam Prep Tips'], cta: 'Subscribe' },
              { id: 'facebook', name: 'Facebook', href: SITE.social.facebook, icon: <Facebook className="h-5 w-5 text-white" />, bg: 'bg-blue-600', items: ['Community Updates', 'Announcements', 'Events'], cta: 'Follow' },
            ].map((s, i) => (
              <motion.a key={s.id} href={s.href} target="_blank" rel="noreferrer"
                custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="group relative rounded-3xl bg-white border border-slate-100 p-7 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)] transition-all overflow-hidden"
                data-testid={`social-card-${s.id}`}>
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-2xl" style={{ background: s.id === 'instagram' ? '#F43F5E' : s.id === 'youtube' ? '#EF4444' : '#2563EB' }} />
                <div className={`inline-flex h-12 w-12 rounded-2xl items-center justify-center ${s.bg} shadow-md`}>{s.icon}</div>
                <div className="mt-6 font-display text-2xl text-slate-900">{s.name}</div>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">{s.items.map(it => <li key={it}>· {it}</li>)}</ul>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900">{s.cta} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" /></div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* ADMISSION CTA */}
      <section className="relative overflow-hidden" data-testid="admission-cta">
        <div className="absolute inset-0 ka-gradient" />
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-20 -left-10 h-80 w-80 rounded-full bg-white/20 blur-3xl animate-float" />
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center text-white">
          <div className="text-[11px] tracking-[0.3em] uppercase font-semibold opacity-90">Now Enrolling</div>
          <h2 className="font-display mt-5 text-5xl sm:text-6xl font-light tracking-tight">Admissions Open Now</h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/85 leading-relaxed">Join Kaizen Academy and build a strong foundation for your future. Limited seats. Big outcomes.</p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact#enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-xl" data-testid="cta-apply-btn">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phones[0]}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/40 text-white text-sm font-medium hover:bg-white/15 transition-colors backdrop-blur" data-testid="cta-call-btn">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
