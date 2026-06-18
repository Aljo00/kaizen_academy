import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../data/site';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
          data-testid="loading-screen"
        >
          <div className="absolute inset-0 ka-gradient opacity-[0.06]" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-full ka-gradient opacity-25 blur-2xl" />
              <img src={ASSETS.logo} alt="KA" className="relative h-24 w-auto" />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-[2px] ka-gradient rounded-full"
            />
            <div className="text-[11px] tracking-[0.32em] uppercase text-slate-500 font-medium">Builders of Next Generation</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
