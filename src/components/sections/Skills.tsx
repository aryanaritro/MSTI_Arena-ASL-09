import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
      <SectionHeading
        index="09"
        title="Tech Ecosystem"
        aside="Tools in active use"
      />
      <Reveal stagger className="border-t border-hairline">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="group grid gap-3 border-b border-hairline py-7 md:grid-cols-[16rem_minmax(0,1fr)] md:items-baseline md:gap-8"
          >
            <h3 className="label-xs transition-colors group-hover:!text-primary">
              {g.title}
            </h3>
            <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              {g.items.map((item, i) => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="text-base transition-opacity duration-500 hover:!opacity-100 md:text-xl md:opacity-60 md:group-hover:opacity-90">
                    {item}
                  </span>
                  {i < g.items.length - 1 && (
                    <span aria-hidden className="text-xs text-muted-foreground">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
