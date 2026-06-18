import { motion } from 'framer-motion';
import { Quote, Users, UserCheck, Target, Building2 } from 'lucide-react';
import { ASSETS, WHY_FEATURES, STATS } from '../data/site';
import AnimatedCounter from '../components/AnimatedCounter';

const ICONS = { Users, UserCheck, Target, Building2 };

export default function About() {
  return (
    <main data-testid="about-page" className="pt-32">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]" />
        <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">About Kaizen Academy</div>
        <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl tracking-tight font-light text-slate-900 max-w-4xl text-balance">
          We don't run a tuition centre. We build <span className="ka-gradient-text italic font-medium">next-generation thinkers</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          Born in Thrithala, Kerala, Kaizen Academy is a premium coaching institution committed to nurturing students through personalised mentorship, modern teaching methodology and career-oriented education.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 ka-gradient rounded-3xl opacity-25 blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
                <img src={ASSETS.founder} alt="Founder" className="w-full h-full object-cover" data-testid="about-founder-img" />
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Message From The Founder</div>
            <Quote className="mt-6 h-8 w-8 text-rose-400" />
            <p className="mt-4 font-display text-3xl md:text-4xl text-slate-900 leading-snug text-balance font-light">
              "At Kaizen Academy, our mission is to shape confident learners and future leaders through quality education and continuous improvement."
            </p>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Kaizen — the Japanese philosophy of continuous improvement — is the heartbeat of our academy. Every student, every batch, every day, we get a little better at what we do.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <div>
                <div className="font-display text-xl italic text-slate-900">Founder</div>
                <div className="text-xs tracking-[0.2em] uppercase text-slate-500">Kaizen Academy, Thrithala</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Our Values</div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Built on principles, not promises.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={f.title} className="p-7 rounded-2xl bg-white border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all" data-testid={`value-${i}`}>
                  <div className="inline-flex h-11 w-11 rounded-xl bg-slate-900 text-white items-center justify-center"><Icon className="h-5 w-5" /></div>
                  <div className="mt-5 font-display text-xl text-slate-900">{f.title}</div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">By The Numbers</div>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">A growing community of learners.</h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-3xl overflow-hidden">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white p-8" data-testid={`about-stat-${i}`}>
                <div className="font-display text-4xl md:text-5xl font-light text-slate-900"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-xs tracking-[0.2em] uppercase text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section className="py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Campus</div>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl font-light tracking-tight text-slate-900">Where great learning happens.</h2>
          </div>
          <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-5">
            {[...ASSETS.campus, ...ASSETS.activities.map(a => a.src)].map((src, i) => (
              <div key={src} className="mb-5 break-inside-avoid group rounded-2xl overflow-hidden bg-slate-100 border border-slate-100" data-testid={`about-campus-${i}`}>
                <img src={src} alt="campus" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
