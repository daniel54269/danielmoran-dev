import { LogoMark, type LogoMark as LogoMarkType } from "./LogoMark";

const brands: LogoMarkType[] = [
  {
    kind: "wordmark",
    name: "Wealth Enhancement Group",
    label: "Wealth Enhancement",
    sub: "Group",
  },
  {
    kind: "image",
    name: "Novadontics",
    src: "/logos/novadontics.png",
    aspectClass: "px-1",
  },
  {
    kind: "image",
    name: "Nokkomo Mints",
    src: "/logos/nokkomo.png",
  },
  {
    kind: "image",
    name: "HAZE Media Agency",
    src: "/logos/haze.png",
  },
  {
    kind: "wordmark",
    name: "Cubic Transportation Systems",
    label: "Cubic",
    sub: "Transportation Systems",
  },
  {
    kind: "wordmark",
    name: "University of San Diego",
    label: "USD",
    sub: "BS Computer Science",
  },
];

export function BrandStrip() {
  return (
    <section className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-400">
          Where I&rsquo;ve worked
        </div>
        <div className="hidden text-[10px] uppercase tracking-widest text-ink-500 sm:block">
          B2C · DTC · Clinical · Transit · Education
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((b) => (
          <LogoMark key={b.name} logo={b} />
        ))}
      </div>
    </section>
  );
}
