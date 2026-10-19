import { about } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-blush py-[72px] md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading icon="user" title="เกี่ยวกับฉัน" />
        <div className="max-w-[68ch] space-y-4 border-l-4 border-pink pl-6 text-ink-soft">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
