import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { experiments } from "@/lib/portfolio-data";

export function Experiments() {
  return (
    <section id="experiments" className="border-y border-hairline bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading index="07" title="Experiments / Lab" aside="Unfinished on purpose" />
        <Reveal stagger className="grid gap-px bg-hairline md:grid-cols-3">
          {experiments.map((e) => (
            <article key={e.id} className="group bg-ink p-6 md:p-8">
              <p className="label-xs !text-primary">{e.id}</p>
              <h3 className="mt-6 font-mono text-lg tracking-tight">{e.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
              <div className="mt-10 flex items-center gap-3 border-t border-hairline pt-4">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span className="label-xs">Status: {e.status}</span>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
