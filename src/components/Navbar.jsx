import { hero, nav } from "../data";

export default function Navbar() {
  return (
    <nav aria-label="เมนูหลัก" className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-2 px-6 py-2.5 sm:h-16 sm:flex-row sm:py-0">
        <a href="#top" className="font-heading font-medium text-rose-deep no-underline">
          Portfolio
        </a>
        <ul className="flex flex-wrap justify-center gap-1 sm:justify-end">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-full px-3.5 py-1.5 text-[0.95rem] text-ink-soft no-underline transition-colors hover:bg-petal hover:text-rose-deep"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
