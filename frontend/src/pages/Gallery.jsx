import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY, GALLERY_TAGS } from '../data/site';

export default function Gallery() {
  const [tag, setTag] = useState('All');
  const [idx, setIdx] = useState(null);
  const items = tag === 'All' ? GALLERY : GALLERY.filter(g => g.tag === tag);

  const close = () => setIdx(null);
  const prev = (e) => { e?.stopPropagation(); setIdx((i) => (i - 1 + items.length) % items.length); };
  const next = (e) => { e?.stopPropagation(); setIdx((i) => (i + 1) % items.length); };

  return (
    <main data-testid="gallery-page" className="pt-32">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-10">
        <div className="text-[11px] tracking-[0.3em] uppercase text-slate-500 font-semibold">Gallery</div>
        <h1 className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl tracking-tight font-light text-slate-900 max-w-4xl text-balance">
          A peek into <span className="ka-gradient-text italic font-medium">life at Kaizen</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          Classrooms, achievements, ceremonies and quiet corners — moments from our campus in Thrithala.
        </p>

        <div className="mt-10 flex flex-wrap gap-2" data-testid="gallery-filters">
          {GALLERY_TAGS.map(t => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tag === t ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              data-testid={`gallery-tag-${t.toLowerCase()}`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
            {items.map((it, i) => {
              // varied tile sizing for an editorial feel
              const span = [
                'row-span-2',
                '',
                'col-span-2 row-span-2',
                '',
                'row-span-2',
                '',
                'col-span-2',
                '',
              ][i % 8] || '';
              return (
                <motion.button
                  key={it.src}
                  onClick={() => setIdx(i)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: (i % 8) * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 ${span}`}
                  data-testid={`gallery-item-${i}`}
                >
                  <img src={it.src} alt={it.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute left-3 right-3 bottom-3 text-left text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <div className="text-[10px] tracking-[0.2em] uppercase opacity-80">{it.tag}</div>
                    <div className="text-sm font-medium leading-snug">{it.caption}</div>
                  </div>
                  <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded-full opacity-0 group-hover:opacity-0">
                    {it.tag}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[120] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6"
            data-testid="lightbox"
          >
            <button onClick={close} className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" data-testid="lightbox-close"><X className="h-5 w-5" /></button>
            <button onClick={prev} className="absolute left-3 md:left-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" data-testid="lightbox-prev"><ChevronLeft className="h-6 w-6" /></button>
            <button onClick={next} className="absolute right-3 md:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" data-testid="lightbox-next"><ChevronRight className="h-6 w-6" /></button>
            <motion.img
              key={items[idx].src}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              src={items[idx].src} alt={items[idx].caption}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-5 left-0 right-0 text-center text-white/90 text-sm">{items[idx].caption}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
