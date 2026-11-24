import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  index,
  title,
  aside,
}: {
  index: string;
  title: string;
  aside?: string;
}) {
  return (
    <Reveal className="mb-14 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-hairline pb-5 md:mb-20">
      <div className="min-w-0">
        <div className="label-xs mb-4">{index}</div>
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      </div>
      {aside ? (
        <p className="label-xs hidden max-w-[16rem] text-right md:block">
          {aside}
        </p>
      ) : null}
    </Reveal>
  );
}
