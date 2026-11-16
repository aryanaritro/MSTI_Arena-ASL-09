import { Reveal } from "@/components/Reveal";

export function Statement() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-0">
      {/* <Reveal stagger className="max-w-5xl">
        <h2 className="display text-[11vw] leading-[0.92] sm:text-[8vw] md:text-[6vw]">
          I don't just write code.
        </h2>
        <h2 className="display text-[11vw] leading-[0.92] text-muted-foreground sm:text-[8vw] md:text-[6vw]">
          I build things.
        </h2>
      </Reveal> */}
      <Reveal
        delay={0.15}
        className="mt-14 grid gap-8 border-t border-hairline pt-8 md:grid-cols-[1fr_1.4fr] md:mt-24"
      >
        <p className="label-xs">Statement</p>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          My workfield moves across Software, Web, Intelligent systems, AI, design, and engineering. I enjoy working between disciplines, where software meets hardware, code meets design, and ideas are tested through Innovation.
        </p>
      </Reveal>
    </section>
  );
}
