import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
      <SectionHeading index="02" title="About" aside="Engineering foundation, software identity" />

      <div className="grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-20">
        <Reveal className="min-w-0">
          <h3 className="display text-[9vw] leading-[0.95] sm:text-5xl md:text-6xl">
            An engineer's mindset.
            <br />
            <span className="text-muted-foreground">A developer's toolkit.</span>
          </h3>
          <div className="mt-10 max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              I&apos;m Aryan Aritro. I build things that I find interesting —
              websites, software, interfaces, small tools, and systems
              that usually starts as an idea and gradually becomes
              something usefull, and every project gives
              me something new to learn.
            </p>
            <p>
              My engineering background has probably influenced the
              way I approach all of this. I like understanding the
              parts, seeing how they connect, finding what is getting
              in the way, and then building a better solution. And this is which makes me choosing development as a career path, because it allows me to build things that my mind desires.
            </p>

            <p>
              Still learning, still experimenting, and still
              figuring out what I want to build next. That is probably
              the part of this work I enjoy most.
            </p>
          </div>

          <div className="mt-14 border-t border-hairline pt-6">
            <p className="label-xs mb-4">Education</p>
            <p className="text-base">Mymensingh Engineering College</p>
            <p className="label-xs mt-1">Electrical &amp; Electronic Engineering</p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <div
            aria-hidden="true"
            className="relative flex aspect-square max-h-[34rem] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.02]"
          >
            <div className="about-orbit about-orbit-outer" />
            <div className="about-orbit about-orbit-inner" />
            <div className="about-orbit-node about-node-one" />
            <div className="about-orbit-node about-node-two" />
            <div className="about-orbit-node about-node-three" />
            <div className="about-core">
              <span className="label-xs !text-primary">IDEA</span>
              <span className="mt-2 block font-mono text-[10px] tracking-[0.2em] text-muted-foreground">→ SYSTEM</span>
            </div>
            <span className="label-xs absolute left-[12%] top-[24%]">DESIGN</span>
            <span className="label-xs absolute right-[10%] top-[40%]">BUILD</span>
            <span className="label-xs absolute bottom-[18%] left-[22%]">ITERATE</span>
            <span className="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground/60">PROCESS / 001</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
