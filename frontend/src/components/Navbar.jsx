import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, ASSETS } from '../data/site';

const links = [
  { to: '/', label: 'Home', id: 'home' },
  { to: '/about', label: 'About', id: 'about' },
  { to: '/courses', label: 'Courses', id: 'courses' },
  { to: '/contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}
      data-testid="main-navbar"
    >
      <div className="px-4 md:px-8">
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? 'glass shadow-[0_8px_30px_rgba(15,23,42,0.08)] px-4 py-2.5' : 'bg-transparent px-4 py-3'
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full ka-gradient opacity-0 group-hover:opacity-40 blur-md transition-opacity" />
              <img src={ASSETS.logo} alt="Kaizen Academy" className="relative h-10 w-10 object-contain rounded-lg bg-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-slate-900">Kaizen Academy</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500">{SITE.location}</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.id}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
                data-testid={`nav-${l.id}-link`}
              >
                {({ isActive }) => (
                  <span className="relative">
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] ka-gradient rounded-full"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${SITE.phones[0]}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              data-testid="nav-call-btn"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              to="/contact#enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white ka-gradient shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 transition-all"
              data-testid="nav-admission-btn"
            >
              <Sparkles className="h-4 w-4" /> Admission Open
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-2xl glass shadow-xl p-4"
            data-testid="nav-mobile-drawer"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.id}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`
                  }
                  data-testid={`nav-mobile-${l.id}-link`}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact#enquiry"
                className="mt-2 text-center px-4 py-3 rounded-xl text-sm font-medium text-white ka-gradient"
                data-testid="nav-mobile-admission-btn"
              >
                Admission Open
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
