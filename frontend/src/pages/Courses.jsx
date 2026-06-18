import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, BarChart3, Briefcase, Stethoscope, Check } from 'lucide-react';
import { COURSE_CATEGORIES } from '../data/site';

const ICONS = { GraduationCap, BarChart3, Briefcase, Stethoscope };

export default function Courses() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? COURSE_CATEGORIES : COURSE_CATEGORIES.filter(c => c.id === filter);

  return (
    <main data-testid="courses-page">
      <section className="relative max-w-7xl mx-auto px-5 md:px-12 pb-10 md:pb-12 pt-28 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.08),transparent_70%)]" />
        <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Our Programs</div>
        <h1 className="font-display mt-4 md:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-slate-900 max-w-4xl text-balance leading-[1.05]">
          Pick a path. We'll <span className="ka-gradient-text italic font-medium">walk it</span> with you.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          From State Syllabus tuition to CA, CMA and B.Pharm coaching — every Kaizen program is crafted for outcomes, with experienced faculty and small batches.
        </p>

        <div className="mt-10 flex flex-wrap gap-2" data-testid="courses-filters">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`} data-testid="filter-all">All Programs</button>
          {COURSE_CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setFilter(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === c.id ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`} data-testid={`filter-${c.id}`}>
              {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {visible.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative bg-white rounded-3xl border border-slate-100 p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.25)] transition-all"
                data-testid={`courses-card-${c.id}`}>
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-10 blur-3xl" style={{ background: c.accent }} />
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 rounded-2xl items-center justify-center text-white shadow-lg" style={{ background: c.accent }}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-mono text-slate-400">0{COURSE_CATEGORIES.findIndex(x => x.id === c.id) + 1}</div>
                </div>
                <div className="mt-7 font-display text-3xl text-slate-900">{c.label}</div>
                <p className="mt-2 text-slate-600 leading-relaxed">{c.blurb}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {c.courses.map(cc => (
                    <li key={cc} className="flex items-center gap-2 text-sm text-slate-700"><Check className="h-3.5 w-3.5 text-emerald-500" /> {cc}</li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center gap-3">
                  <Link to="/contact#enquiry" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium ka-gradient text-white hover:-translate-y-0.5 transition-transform shadow-md" data-testid={`courses-apply-${c.id}`}>
                    <Sparkles className="h-4 w-4" /> Apply for {c.label.split(' ')[0]}
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900" data-testid={`courses-ask-${c.id}`}>
                    Ask a question <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden mt-12" data-testid="courses-cta">
        <div className="absolute inset-0 ka-gradient" />
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-12 py-14 md:py-20 text-center text-white">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">Not sure which program fits?</h2>
          <p className="mt-3 max-w-xl mx-auto text-white/85">Talk to our mentors. We'll help you choose the right path for your goals.</p>
          <Link to="/contact#enquiry" className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:-translate-y-0.5 transition-transform shadow-xl" data-testid="courses-cta-apply">
            Get Free Counselling <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
