import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useMotion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
  stagger?: boolean;
  start?: string;
};

/** Scroll-triggered fade + rise. With `stagger`, direct children animate in sequence. */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 28,
  stagger = false,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    const targets = stagger ? Array.from(el.children) : [el];
    const ctx = gsap.context(() => {
      if (stagger) {
        gsap.set(el, { opacity: 1 });
      }
      gsap.fromTo(
        targets,
        { opacity: 0, y, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [reduced, delay, y, stagger, start]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("opacity-0", className)}
      style={{ opacity: undefined }}
    >
      {children}
    </Tag>
  );
}
