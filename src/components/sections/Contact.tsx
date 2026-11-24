import { Reveal } from "@/components/Reveal";
import { MagneticLink } from "@/components/MagneticLink";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-[85dvh] max-w-[1600px] flex-col justify-center px-6 py-28 md:px-12"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 select-text font-mono text-2xl tracking-tight text-black md:right-12 md:text-4xl"
      >
        VAHID
      </span>
      <Reveal className="label-xs mb-10">05 — Contact</Reveal>
      <Reveal stagger y={40}>
        <h3 className="display text-[12vw] leading-[0.88] sm:text-[11vw] md:text-[5.5vw]">
          Let's
        </h3>
        <h3 className="display text-[12vw] leading-[0.88] text-muted-foreground sm:text-[11vw] md:text-[5.5vw]">
          Collaborate .
        </h3>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mt-12 max-w-md text-sm leading-relaxed text-muted-foreground"
      >
        For collaborations, software projects, web development, experiments or
        interesting technical ideas.
      </Reveal>
      <div className="mt-4 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-hairline pt-10">
        <MagneticLink
          href={profile.bookcall}
          external
          className="display link-underline text-3xl md:text-4xl"
        >
          Book a Call <span className="text-primary">→</span>
        </MagneticLink>
      </div>
      <Reveal
        delay={0.2}
        className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-hairline pt-10"
      >
        <MagneticLink
          href={`mailto:${profile.email}`}
          className="display link-underline text-3xl md:text-3xl"
        >
          Email me
        </MagneticLink>
        <MagneticLink
          href={profile.linkedin}
          external
          className="label-xs link-underline !text-foreground"
        >
          LinkedIn
        </MagneticLink>
        <MagneticLink
          href={profile.github}
          external
          className="label-xs link-underline !text-foreground"
        >
          GitHub
        </MagneticLink>
      </Reveal>
    </section>
  );
}
