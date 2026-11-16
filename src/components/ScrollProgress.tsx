import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
        {String(Math.round(p * 100)).padStart(3, "0")}
      </span>
      <div className="relative h-32 w-px bg-hairline">
        <div
          className="absolute left-0 top-0 w-px bg-primary transition-[height] duration-150"
          style={{ height: `${p * 100}%` }}
        />
      </div>
    </div>
  );
}
