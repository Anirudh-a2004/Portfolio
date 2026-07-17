import { useEffect, useRef, useState } from "react";

/**
 * Returns a 0..1 progress value based on the element's position within the viewport.
 * 0 when the element's top reaches the viewport bottom, 1 when the element's bottom
 * has scrolled past the viewport top-anchor. Naturally reverses on scroll-up.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  anchor = 0.5
) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const anchorY = vh * anchor;
      const total = rect.height || 1;
      const p = (anchorY - rect.top) / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [anchor]);

  return { ref, progress };
}
