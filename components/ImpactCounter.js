"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ImpactCounter.module.css";

function Counter({ value, suffix, label }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReducedMotion) {
          setDisplayValue(value);
          return;
        }

        const duration = 1600;
        const start = performance.now();

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(eased * value));
          if (progress < 1) {
            frame = requestAnimationFrame(step);
          }
        };

        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.value}>
        {displayValue.toLocaleString("en-IN")}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function ImpactCounter({ stats }) {
  return (
    <div className={styles.row}>
      {stats.map((stat) => (
        <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
      ))}
    </div>
  );
}
