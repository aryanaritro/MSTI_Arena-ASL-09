import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useMotion";

export function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const leftPanel = useRef<HTMLDivElement>(null);
  const rightPanel = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      /*
      * 1. Identity appears
      */
      tl.to(content.current, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
      })

        /*
        * 2. Line draws
        */
        .to(
          line.current,
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.15",
        )

        /*
        * 3. Very short pause.
        */
        .to({}, {
          duration: 0.01,
        })

        /*
        * 4. Door opens.
        */
        .to(
          leftPanel.current,
          {
            xPercent: -100,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "open",
        )

        .to(
          rightPanel.current,
          {
            xPercent: 100,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "open",
        )

        /*
        * 5. Start Hero shortly after the doors begin opening.
        *
        * The black panels are still covering most of the screen,
        * so the Hero entrance remains seamless.
        */
        .call(onDone, [], "open+=0.15")

        /*
        * 6. Remove preloader.
        */
        .set(root.current, {
          display: "none",
        });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [onDone, reduced]);

  if (reduced) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] overflow-hidden bg-ink"
    >
      {/* Left curtain */}
      <div
        ref={leftPanel}
        className="absolute inset-y-0 left-0 z-20 w-1/2 bg-ink"
      />

      {/* Right curtain */}
      <div
        ref={rightPanel}
        className="absolute inset-y-0 right-0 z-20 w-1/2 bg-ink"
      />

      {/* Editorial title layer */}
      <div
        ref={content}
        className="absolute inset-0 z-30 flex flex-col justify-between px-6 py-8 md:px-12 md:py-10"
        style={{
          opacity: 0,
          transform: "translateY(12px)",
        }}
      >
        {/* Top */}
        <div className="flex items-center justify-between label-xs">
          <span>Aryan Aritro</span>
          <span>2026</span>
        </div>

        {/* Centre */}
        <div className="flex flex-col items-center">
          <span className="label-xs tracking-[0.3em]">
            PORTFOLIO
          </span>

          <div className="mt-6 h-px w-full bg-hairline md:mt-8">
            <div
              ref={line}
              className="h-px w-full origin-center scale-x-0 bg-primary"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between label-xs">
          <span>001</span>

          <span className="hidden md:block">
            DEVELOPER · INNOVATOR · TECHNOLOGIST
          </span>
        </div>
      </div>
    </div>
  );
}