import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsFinePointer, useReducedMotion } from "@/hooks/useMotion";

/** Desktop-only two-part cursor: hard dot + soft trailing aura. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const aura = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const fine = useIsFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!fine || reduced) return;
    const d = dot.current!;
    const a = aura.current!;
    const l = label.current!;
    document.documentElement.style.cursor = "none";

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const auraPos = { ...pos };
    let raf = 0;

    const move = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const loop = () => {
      auraPos.x += (pos.x - auraPos.x) * 0.12;
      auraPos.y += (pos.y - auraPos.y) * 0.12;
      gsap.set(d, { x: pos.x, y: pos.y });
      gsap.set(a, { x: auraPos.x, y: auraPos.y });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor],a,button") as HTMLElement | null;
      const text = t?.getAttribute?.("data-cursor");
      if (text) {
        l.textContent = text;
        gsap.to(a, { scale: 3.4, opacity: 0.95, duration: 0.5, ease: "power3.out" });
        gsap.to(l, { opacity: 1, duration: 0.3 });
        gsap.to(d, { scale: 0, duration: 0.3 });
      } else if (t) {
        gsap.to(a, { scale: 1.9, opacity: 0.8, duration: 0.45, ease: "power3.out" });
        gsap.to(d, { scale: 1.4, duration: 0.3 });
      }
    };

    const out = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor],a,button");
      if (!t) return;
      gsap.to(a, { scale: 1, opacity: 0.55, duration: 0.45, ease: "power3.out" });
      gsap.to(d, { scale: 1, duration: 0.3 });
      gsap.to(l, { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.style.cursor = "";
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        ref={aura}
        className="absolute -left-6 -top-6 grid h-12 w-12 place-items-center rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent) 0%, transparent 70%)",
        }}
      >
        <span
          ref={label}
          className="font-mono text-[3.2px] tracking-[0.2em] text-foreground opacity-0 uppercase"
        />
      </div>
      <div className="absolute -left-[2px] -top-[2px] h-1 w-1 rounded-full bg-foreground" ref={dot} />
    </div>
  );
}
