/* Navigation */

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/portfolio-data";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          solid
            ? "border-b border-hairline bg-background/70 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-12">
          <a
            href="/"
            onClick={(event) => {
              if (window.location.pathname === "/") {
                event.preventDefault();
                window.history.replaceState(
                  window.history.state,
                  "",
                  `${window.location.pathname}${window.location.search}`,
                );

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="label-xs min-w-0 truncate !text-foreground transition-opacity hover:opacity-60"
          >
            {profile.name}
          </a>
          <div className="flex shrink-0 items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="label-xs link-underline hover:!text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform duration-500",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform duration-500",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink transition-[opacity,visibility] duration-500",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex h-full flex-col justify-center gap-4 px-6 md:px-12">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              className="overflow-hidden transition-transform duration-700"
              style={{
                transform: open ? "translateY(0)" : "translateY(60%)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block py-2 text-2xl transition-colors hover:text-primary sm:text-4xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
