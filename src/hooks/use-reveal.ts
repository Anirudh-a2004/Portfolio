import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal hook. Toggles `visible` whenever the element enters/leaves
 * the viewport so animations replay on re-scroll.
 */
export function useReveal<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}
