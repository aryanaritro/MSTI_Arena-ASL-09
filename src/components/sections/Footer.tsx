import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="min-w-0">
            <p className="display text-2xl md:text-3xl">{profile.name}</p>
            <p className="label-xs mt-3">{profile.roles}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="label-xs link-underline hover:!text-foreground"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="label-xs link-underline hover:!text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="label-xs link-underline hover:!text-foreground"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <span className="label-xs">© 2026 {profile.name}</span>
          <a href="#top" className="label-xs link-underline hover:!text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
