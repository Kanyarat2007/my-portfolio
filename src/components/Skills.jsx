import { skills } from "../data";
import SectionHeading from "./SectionHeading";
import Chips from "./Chips";
import Icon from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="py-[72px] md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading icon="code" title="ทักษะ" sub="เครื่องมือและเทคโนโลยีที่ฉันใช้งาน" />
        <div className="grid gap-5 sm:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {skills.map((s) => (
            <div key={s.group} className="rounded-[20px] border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(217,113,143,0.14)]">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-petal text-rose-deep">
                  <Icon name={s.icon || "code"} className="h-5 w-5" />
                </span>
                <h3 className="text-[1.15rem] text-rose-deep">{s.group}</h3>
              </div>
              <Chips items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
