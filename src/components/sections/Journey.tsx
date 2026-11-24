import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { journey } from "@/lib/portfolio-data";

export function Journey() {
  return (
    <section className="border-y border-hairline bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <SectionHeading
          index="10"
          title="Journey"
          aside="Direction, not a résumé"
        />
        <Reveal stagger>
          {journey.map((j) => (
            <div
              key={j.phase}
              className="group grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 border-b border-hairline py-8 md:grid-cols-[8rem_16rem_minmax(0,1fr)] md:items-baseline"
            >
              <span className="label-xs">{j.when}</span>
              <h3 className="display min-w-0 text-2xl transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {j.phase}
              </h3>
              <p className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1">
                {j.note}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
