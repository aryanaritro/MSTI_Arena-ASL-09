import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useMotion";
import { cn } from "@/lib/utils";

/** Scroll-scaled, clip-path revealed monochrome image. */
export function ProjectMedia({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = wrap.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(12% 0% 12% 0%)", scale: 0.95 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
      gsap.to(el.querySelector("img"), {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div
      ref={wrap}
      className={cn("grain group/media relative overflow-hidden bg-surface", ratio, className)}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[112%] w-full object-cover opacity-80 grayscale transition-[transform,opacity] duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(to top, var(--background) 2%, transparent 60%)" }}
      />
    </div>
  );
}
