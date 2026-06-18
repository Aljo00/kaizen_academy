import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import { SITE, ASSETS, COURSE_CATEGORIES } from '../data/site';

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-[#0B1220] text-slate-300" data-testid="site-footer">
      <div className="absolute inset-x-0 -top-px h-px ka-gradient opacity-60" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="KA" className="h-12 w-12 bg-white rounded-xl p-1" />
            <div>
              <div className="font-display text-xl text-white">Kaizen Academy</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-slate-500">{SITE.location}</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            {SITE.tagline}. A premium coaching institution in Thrithala building confident learners and future leaders.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="footer-instagram" className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" data-testid="footer-youtube" className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="footer-facebook" className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-4">Quick Links</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-4">Programs</div>
          <ul className="space-y-2.5 text-sm">
            {COURSE_CATEGORIES.map(c => (
              <li key={c.id}><Link to="/courses" className="hover:text-white transition-colors">{c.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-slate-500" /><div>
              <a href={`tel:${SITE.phones[0]}`} className="hover:text-white block">{SITE.phones[0]}</a>
              <a href={`tel:${SITE.phones[1]}`} className="hover:text-white block">{SITE.phones[1]}</a>
            </div></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-slate-500" /><a href={`mailto:${SITE.email}`} className="hover:text-white break-all">{SITE.email}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-slate-500" /><span className="text-slate-400">{SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}, {SITE.address.pin}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>© 2025 Kaizen Academy. All Rights Reserved.</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Admissions are currently open</div>
        </div>
      </div>
    </footer>
  );
}
