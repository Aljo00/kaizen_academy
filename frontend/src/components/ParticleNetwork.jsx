import { useEffect, useRef } from 'react';

/**
 * Lightweight canvas particle network background.
 * Renders connected nodes with subtle mouse parallax.
 */
export default function ParticleNetwork({ density = 60, color = '29, 78, 216', linkColor = '124, 58, 237' }) {
  const ref = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / (18000)) + density / 2;
      particles = new Array(Math.min(count, 140)).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // mouse parallax pull
      for (let p of particles) {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 18000) {
          const f = 0.00008 * (18000 - d2) / 18000;
          p.vx += dx * f;
          p.vy += dy * f;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.vx *= 0.995;
        p.vy *= 0.995;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, 0.65)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(${linkColor}, ${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.current.x = -9999; mouse.current.y = -9999; };

    resize();
    tick();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [density, color, linkColor]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" data-testid="particle-network" />;
}
