import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsFinePointer, useReducedMotion } from "@/hooks/useMotion";
import { profile } from "@/lib/portfolio-data";
import portrait from "@/assets/portrait.png";

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  // const fine = useIsFinePointer();

  useEffect(() => {
    if (!ready || reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        img.current,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.12, y: 40 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, y: 0, duration: 3.0 },
      )
        .fromTo(
          ".hero-line",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.2, stagger: 0.12 },
          0.35,
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.9,
        );

      gsap.to(img.current, {
        y: -1,
        duration: 15,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, [ready, reduced]);

  // useEffect(() => {
  //   if (!fine || reduced || !ready) return;
  //   const el = root.current!;
  //   const onMove = (e: MouseEvent) => {
  //     const rx = e.clientX / window.innerWidth - 0.5;
  //     const ry = e.clientY / window.innerHeight - 0.5;
  //     gsap.to(img.current, { x: rx * 22, y: ry * 14, duration: 1.2, ease: "power3.out", overwrite: "auto" });
  //     gsap.to(copy.current, { x: rx * 8, y: ry * 5, duration: 1.4, ease: "power3.out", overwrite: "auto" });
  //   };
  //   el.addEventListener("mousemove", onMove);
  //   return () => el.removeEventListener("mousemove", onMove);
  // }, [fine, reduced, ready]);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0"
    >
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-6 md:grid-cols-[1fr_1fr] md:gap-6 md:px-12">
        <div ref={copy} className="order-2 min-w-0 md:order-1">
          <p className="hero-fade label-xs mb-6 opacity-0">
            {profile.eyebrow} — {profile.tagline}
          </p>
          <h1 className="display text-[13vw] leading-[0.9] sm:text-[9vw] md:text-[5.6vw]">
            {profile.headline.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span className="hero-line block">{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-fade mt-8 max-w-md text-sm leading-relaxed text-muted-foreground opacity-0">
            Developer, innovator and technologist, building softwares, websites and
            intelligent systems — with an engineer's instinct underneath.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap gap-x-8 gap-y-2 opacity-0">
            {/* <span className="label-xs">Available for collaboration</span> */}
          </div>
        </div>

        <div className="order-1 min-w-0 md:order-2">
          <div ref={img} className="relative mx-auto w-full max-w-[520px] md:max-w-none">
            <img
              src={portrait}
              alt="Portrait of Aryan Aritro in profile, lit against a black background"
              width={1024}
              height={1024}
              className="w-full contrast-125 grayscale"
              style={{ WebkitMaskImage: "radial-gradient(ellipse 68% 72% at 50% 48%, black 25%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, transparent 100%)", maskImage: "radial-gradient(ellipse 68% 72% at 50% 48%, black 25%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, transparent 100%)", }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                radial-gradient(
                circle at 62% 42%,
                rgba(80, 140, 180, 0.045),
                transparent 28%
               ),
                linear-gradient(
                to bottom,
                transparent 55%,
                var(--background) 96%
               ),
                linear-gradient(
                to right,
                var(--background) 0%,
                transparent 22%
                )`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between md:inset-x-12 md:bottom-8">
        <span className="animate-pulse text-lg text-primary">↓</span>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-hairline" />
    </section>
  );
}
