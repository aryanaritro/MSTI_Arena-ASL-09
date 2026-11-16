import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/portfolio-data";

export function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1800px] px-6 py-24 md:px-12 md:py-36"
    >
      <SectionHeading
        index="03"
        title="My Projects"
        aside="Projects, platforms and experiments."
      />

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.index} delay={(index % 3) * 0.08}>
            <article className="group flex h-full min-w-0 flex-col">
              <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#050505] transition-colors duration-500 group-hover:border-primary/30">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-0" />
                <span className="label-xs absolute left-4 top-4 z-10 text-white/80">{project.index}</span>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Visit ${project.name}`}
                    className="absolute inset-0 z-20"
                  />
                ) : null}
              </div>

              <div className="flex flex-1 flex-col border-b border-white/10 py-5 transition-colors duration-500 group-hover:border-primary/30">
                <p className="label-xs mb-2 text-muted-foreground transition-colors group-hover:text-primary">
                  {project.category} <span className="px-1 text-white/25">/</span> {project.year}
                </p>
                <h3 className="display text-2xl leading-tight sm:text-3xl">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                  {project.tech.join(" · ")}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="label-xs !tracking-[0.12em]">{project.status}</span>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="label-xs inline-flex min-h-11 items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      Visit <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="label-xs text-muted-foreground/60">In progress</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {projects.length > 3 ? (
        <div className="mt-10 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            className="label-xs inline-flex min-h-11 items-center gap-3 border border-white/15 px-6 text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            {showAll ? "Show less" : "See more"}
            <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
