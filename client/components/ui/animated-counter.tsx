import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const elapsed = duration - remaining;
      const progress = elapsed / duration;

      if (progress >= 1) {
        setCount(target);
        clearInterval(timer);
      } else {
        // Use easeOutCubic for smooth animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(target * easedProgress));
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};
