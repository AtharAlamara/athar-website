// src/lib/useCompactHeader.ts
import * as React from 'react';

type Opts = {
  container: React.RefObject<HTMLElement>;
  left: React.RefObject<HTMLElement>;
  right: React.RefObject<HTMLElement>;
  logo: React.RefObject<HTMLElement>;
  padding?: number; // extra safety margin in px
};

export function useCompactHeader({ container, left, right, logo, padding = 24 }: Opts) {
  const [compact, setCompact] = React.useState(false);

  const measure = React.useCallback(() => {
    const c = container.current;
    const l = left.current;
    const r = right.current;
    const g = logo.current;
    if (!c || !l || !r || !g) return;

    const cw = c.getBoundingClientRect().width;
    const lw = l.getBoundingClientRect().width;
    const rw = r.getBoundingClientRect().width;
    const gw = g.getBoundingClientRect().width;

    const needed = lw + rw + gw + padding * 2;
    setCompact(needed > cw);
  }, [container, left, right, logo, padding]);

  React.useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (container.current) ro.observe(container.current);
    if (left.current) ro.observe(left.current);
    if (right.current) ro.observe(right.current);
    if (logo.current) ro.observe(logo.current);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return compact;
}
