import { motion } from 'framer-motion';
import { Quote, Users, UserCheck, Target, Building2 } from 'lucide-react';
import { ASSETS, WHY_FEATURES, STATS } from '../data/site';
import AnimatedCounter from '../components/AnimatedCounter';

const ICONS = { Users, UserCheck, Target, Building2 };

export default function About() {
  return (
    <main data-testid="about-page" className="pt-32">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)]" />
        <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">About Kaizen Academy</div>
        <h1 className="font-display mt-4 md:mt-5 text-4xl sm:text-5xl lg:text-7xl tracking-tight font-light text-slate-900 max-w-4xl text-balance leading-[1.05]">
          We don't run a tuition centre. We build <span className="ka-gradient-text italic font-medium">next-generation thinkers</span>.
        </h1>
        <p className="mt-5 md:mt-6 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
          Born in Thrithala, Kerala, Kaizen Academy is a premium coaching institution committed to nurturing students through personalised mentorship, modern teaching methodology and career-oriented education.
        </p>
      </section>

      {/* OUR STORY VIDEO */}
      <section className="relative py-16 md:py-28 bg-[#0B1220] overflow-hidden" data-testid="about-story-video">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl ka-gradient pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-12">
          <div className="text-center max-w-2xl mx-auto text-white">
            <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-400 font-semibold">Our Story</div>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">The story of <em className="ka-gradient-text not-italic">Kaizen Academy</em>.</h2>
            <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">A glimpse into our journey — the classrooms, the students, the spirit that makes Kaizen what it is today.</p>
          </div>
          <div className="mt-10 md:mt-14 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 bg-black">
            <video
              src="https://customer-assets.emergentagent.com/job_kaizen-premium/artifacts/2iedaedl_WhatsApp%20Video%202026-06-17%20at%209.39.20%20PM.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              data-testid="about-story-player"
            />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-12 grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 ka-gradient rounded-3xl opacity-25 blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
                <img src={ASSETS.founder} alt="Founder" className="w-full h-full object-cover" data-testid="about-founder-img" />
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7">
            <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Message From The Founder</div>
            <Quote className="mt-5 md:mt-6 h-7 w-7 md:h-8 md:w-8 text-rose-400" />
            <p className="mt-3 md:mt-4 font-display text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-snug text-balance font-light">
              "At Kaizen Academy, our mission is to shape confident learners and future leaders through quality education and continuous improvement."
            </p>
            <p className="mt-5 md:mt-6 text-sm md:text-base text-slate-600 leading-relaxed">
              Kaizen — the Japanese philosophy of continuous improvement — is the heartbeat of our academy. Every student, every batch, every day, we get a little better at what we do.
            </p>
            <div className="mt-7 md:mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <div>
                <div className="font-display text-lg md:text-xl italic text-slate-900">Founder</div>
                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-slate-500">Kaizen Academy, Thrithala</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Our Values</div>
            <h2 className="font-display mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">Built on principles, not promises.</h2>
          </div>
          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {WHY_FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <div key={f.title} className="p-5 md:p-7 rounded-2xl bg-white border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all" data-testid={`value-${i}`}>
                  <div className="inline-flex h-10 w-10 md:h-11 md:w-11 rounded-xl bg-slate-900 text-white items-center justify-center"><Icon className="h-5 w-5" /></div>
                  <div className="mt-4 md:mt-5 font-display text-lg md:text-xl text-slate-900">{f.title}</div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-5 md:px-12 text-center">
          <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">By The Numbers</div>
          <h2 className="font-display mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">A growing community of learners.</h2>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl md:rounded-3xl overflow-hidden">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white p-5 md:p-8" data-testid={`about-stat-${i}`}>
                <div className="font-display text-3xl md:text-5xl font-light text-slate-900"><AnimatedCounter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS */}
      <section className="py-16 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Campus</div>
            <h2 className="font-display mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900">Where great learning happens.</h2>
          </div>
          <div className="mt-10 md:mt-12 columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-5">
            {[...ASSETS.campus, ...ASSETS.activities.map(a => a.src)].map((src, i) => (
              <div key={src} className="mb-3 md:mb-5 break-inside-avoid group rounded-xl md:rounded-2xl overflow-hidden bg-slate-100 border border-slate-100" data-testid={`about-campus-${i}`}>
                <img src={src} alt="campus" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
