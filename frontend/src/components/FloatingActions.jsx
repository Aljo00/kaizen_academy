import { useState } from 'react';
import { MessageCircle, Phone, Instagram, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '../data/site';

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/91${SITE.phones[0]}?text=${encodeURIComponent(SITE.whatsappMsg)}`;
  const items = [
    { id: 'whatsapp', href: wa, color: 'bg-[#25D366]', icon: <MessageCircle className="h-5 w-5 text-white" />, label: 'WhatsApp' },
    { id: 'call', href: `tel:${SITE.phones[0]}`, color: 'bg-blue-600', icon: <Phone className="h-5 w-5 text-white" />, label: 'Call' },
    { id: 'instagram', href: SITE.social.instagram, color: 'bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-amber-400', icon: <Instagram className="h-5 w-5 text-white" />, label: 'Instagram' },
  ];
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3" data-testid="floating-actions">
      <AnimatePresence>
        {open && items.map((it, i) => (
          <motion.a
            key={it.id}
            href={it.href}
            target={it.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05 } }}
            exit={{ opacity: 0, y: 8, scale: 0.8 }}
            className="group flex items-center gap-3"
            data-testid={`fab-${it.id}`}
          >
            <span className="px-3 py-1.5 rounded-full bg-white shadow-md text-xs font-medium text-slate-700">{it.label}</span>
            <span className={`h-12 w-12 rounded-full ${it.color} shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}>
              {it.icon}
            </span>
          </motion.a>
        ))}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={`relative h-14 w-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all ${open ? 'bg-slate-900 rotate-90' : 'ka-gradient pulse-ring'}`}
        aria-label="Open quick actions"
        data-testid="fab-toggle"
      >
        {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
}
