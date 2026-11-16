/* LiveOnTheWeb */
import { useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { liveSites } from "@/lib/portfolio-data";

export function LiveSiteCard({ site, index }: { site: (typeof liveSites)[number]; index: number }) {
  const visualRef = useRef<HTMLDivElement>(null);

  /*
   * -------------------------------------------------------
   * CURSOR GLOW
   * -------------------------------------------------------
   *
   * The blue light follows the mouse only.
   * Touch devices are intentionally ignored.
   */
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const element = visualRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    element.style.setProperty("--glow-x", `${x}px`);

    element.style.setProperty("--glow-y", `${y}px`);
  };

  /*
   * Remove protocol from the displayed URL.
   *
   * Example:
   * https://arshinagar-fashion.vercel.app
   *
   * becomes:
   * arshinagar-fashion.vercel.app
   */
  const cleanUrl = site.url.replace(/^https?:\/\//, "");

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noreferrer noopener"
      data-cursor="Visit"
      className="
        group
        block
        min-w-0
      "
    >
      {/* =================================================
          PROJECT VISUAL
      ================================================= */}

      <div
        ref={visualRef}
        onPointerMove={handlePointerMove}
        className="
          relative
          overflow-hidden
          border
          border-white/10
          bg-[#050505]
          transition-colors
          duration-500
          hover:border-white/20
        "
        style={
          {
            "--glow-x": "50%",
            "--glow-y": "50%",
          } as CSSProperties
        }
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            aspect-[16/9]
            w-full
            overflow-hidden
            bg-white/[0.02]
          "
        >
          <img
            src={site.image}
            alt={`${site.name} preview`}
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              grayscale
              transition-all
              duration-700
              ease-out
              group-hover:scale-[1.03]
              group-hover:grayscale-0
            "
          />

          {/* =================================================
              CINEMATIC DARK OVERLAY
          ================================================= */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/20

              transition-opacity
              duration-700

              group-hover:opacity-0
            "
          />

          {/* =================================================
              CURSOR FOLLOWING BLUE LIGHT
          ================================================= */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
            style={{
              background:
                "radial-gradient(260px circle at var(--glow-x) var(--glow-y), rgba(70,150,220,0.16), transparent 72%)",
            }}
          />

          {/* =================================================
              SUBTLE BLUE EDGE RESPONSE

              This is NOT a permanent border.
              It only appears during hover.
          ================================================= */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0

              border
              border-transparent

              transition-all
              duration-500

              group-hover:border-primary/25
              group-hover:shadow-[inset_0_0_35px_rgba(70,150,220,0.06)]
            "
          />

          {/* =================================================
              PROJECT NUMBER
          ================================================= */}

          <div
            className="
              absolute
              left-5
              top-5
              z-20

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                label-xs
                text-white/70

                transition-all
                duration-300

                group-hover:text-primary
                group-hover:[text-shadow:0_0_12px_rgba(70,150,220,0.7)]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className="
                h-px
                w-8
                bg-white/40

                transition-all
                duration-500

                group-hover:w-12
                group-hover:bg-primary
                group-hover:shadow-[0_0_10px_rgba(70,150,220,0.8)]
              "
            />
          </div>

          {/* =================================================
              VISIT INDICATOR
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              right-5
              z-20

              flex
              items-center
              gap-3

              translate-y-2
              opacity-0

              transition-all
              duration-500

              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <span
              className="
                label-xs
                text-primary

                [text-shadow:0_0_12px_rgba(70,150,220,0.7)]
              "
            >
              VISIT
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full

                border
                border-primary/60

                text-primary

                shadow-[0_0_15px_rgba(70,150,220,0.25)]
              "
            >
              ↗
            </span>
          </div>
        </div>
      </div>

      {/* =================================================
          PROJECT INFORMATION
      ================================================= */}

      <div
        className="
          border-b
          border-white/10
          py-7

          transition-colors
          duration-500

          group-hover:border-primary/30
        "
      >
        <div
          className="
            grid
            gap-6

            md:grid-cols-[1.2fr_1fr_0.8fr_auto]
            md:items-end
            md:gap-8
          "
        >
          {/* =================================================
              NAME + URL
          ================================================= */}

          <div className="min-w-0">
            <h3
              className="
                display
                text-3xl

                transition-transform
                duration-700
                ease-out

                group-hover:translate-x-1

                sm:text-4xl
                md:text-5xl
              "
            >
              {site.name}
            </h3>

            <p
              className="
                label-xs
                mt-3
                break-all

                text-muted-foreground

                transition-colors
                duration-300

                group-hover:text-primary
              "
            >
              {cleanUrl}
            </p>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div>
            <span className="label-xs mb-3 block">About</span>

            <p
              className="
                max-w-md
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              {site.what}
            </p>
          </div>

          {/* =================================================
              ROLE + TECHNOLOGY
          ================================================= */}

          <div className="flex flex-col gap-3">
            <div>
              <span className="label-xs mb-2 block">Role</span>

              <span className="text-sm">{site.role}</span>
            </div>

            <div>
              <span className="label-xs mb-2 block">Technology</span>

              <span className="text-sm text-muted-foreground">{site.tech.join(" / ")}</span>
            </div>
          </div>

          {/* =================================================
              ARROW
          ================================================= */}

          <div
            className="
              hidden

              text-2xl
              text-muted-foreground

              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-primary

              md:block
            "
          >
            ↗
          </div>
        </div>
      </div>
    </a>
  );
}

export function LiveOnTheWeb() {
  return (
    <section
      id="live"
      className="
        mx-auto
        max-w-[1600px]

        px-6
        py-24

        md:px-12
        md:py-36
      "
    >
      {/* =================================================
          SECTION HEADING
      ================================================= */}

      <SectionHeading
        index="06"
        title="Live on the Web"
        aside="Published, running, publicly reachable"
      />

      {/* =================================================
          PROJECT GRID  (shows first 2 only)
      ================================================= */}

      <Reveal>
        <div
          className="
            mt-14

            grid
            gap-12

            md:mt-20
            md:grid-cols-2
            md:gap-x-8
            md:gap-y-20
          "
        >
          {liveSites.slice(0, 2).map((site, index) => (
            <LiveSiteCard key={site.name} site={site} index={index} />
          ))}
        </div>
      </Reveal>

      {/* =================================================
          SEE ALL CTA
      ================================================= */}

      <div className="mt-12 flex justify-end">
        <a
          href="/websites"
          className="
            label-xs
            flex
            items-center
            gap-2
            text-muted-foreground
            transition-colors
            duration-300
            hover:text-primary
          "
        >
          See all websites
          <span className="text-lg leading-none">→</span>
        </a>
      </div>
    </section>
  );
}
