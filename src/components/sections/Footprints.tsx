import { capabilities } from "@/lib/portfolio-data";

export function Footprints() {
  return (
    <section
      id="footprints"
      className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mb-12 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-hairline pb-5 md:mb-16">
        <div>
          <p className="label-xs mb-4">04</p>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            My Skills and expertise
          </h2>
        </div>
        <p className="label-xs hidden max-w-[16rem] text-right md:block">
          Areas I work across
        </p>
      </div>

      <div className="border-t border-hairline">
        {capabilities.map((capability) => (
          <article
            key={capability.index}
            className="grid gap-4 border-b border-hairline py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8 md:py-9"
          >
            <span className="label-xs text-muted-foreground">{capability.index}</span>
            <h3 className="text-lg font-medium leading-snug sm:text-xl">
              {capability.title}
            </h3>
            <div className="md:pl-4">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {capability.tech.map((technology) => (
                  <li key={technology} className="label-xs !tracking-[0.12em]">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
