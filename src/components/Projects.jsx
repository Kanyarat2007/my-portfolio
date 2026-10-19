import { useState } from "react";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Chips from "./Chips";
import Icon from "./Icons";

function Showcase({ images = [], title }) {
  const [i, setI] = useState(0);
  const hasImages = images.length > 0;

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(217,113,143,0.12)]">
      <div
        className="flex items-center gap-1.5 border-b border-line bg-blush px-4 py-2.5"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-pink" />
        <span className="h-2.5 w-2.5 rounded-full bg-pink/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-pink/30" />
      </div>

      <div className="aspect-video bg-gradient-to-br from-petal via-blush to-white">
        {hasImages ? (
          <img
            src={images[i]}
            alt={`ตัวอย่างผลงาน ${title} รูปที่ ${i + 1}`}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center text-rose">
            <div className="flex flex-col items-center gap-2">
              <Icon name="image" className="h-10 w-10" />
              <p className="font-heading">พื้นที่แสดงภาพตัวอย่างผลงาน</p>
              <p className="text-[0.85rem] text-ink-soft">
                วางรูปใน public/projects/ แล้วใส่ path ที่ images ใน data.js
              </p>
            </div>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto border-t border-line bg-blush p-3">
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`ดูรูปที่ ${idx + 1}`}
              aria-current={idx === i}
              className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${idx === i ? "border-rose" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Project({ p }) {
  const blocks = [
    ["alert", "ปัญหา", p.problem],
    ["check", "แนวทางแก้ไข", p.solution],
    ["user", "บทบาทของฉัน", p.role],
  ].filter(([, , text]) => text);

  return (
    <article className="mb-8 rounded-3xl border border-line bg-white px-[22px] py-7 shadow-[0_6px_24px_rgba(217,113,143,0.06)] sm:p-10">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="mb-1 text-[1.55rem]">{p.title}</h3>
          <p className="text-ink-soft">{p.tagline}</p>
        </div>
        {(p.demo || p.repo) && (
          <div className="flex shrink-0 flex-wrap gap-2.5">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-[0.95rem] font-medium text-white no-underline shadow-[0_6px_16px_rgba(217,113,143,0.3)] transition hover:-translate-y-0.5 hover:bg-rose-deep"
              >
                <Icon name="external" className="h-4 w-4" /> ดู Demo
              </a>
            )}
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-pink bg-white px-5 py-2.5 text-[0.95rem] font-medium text-rose-deep no-underline transition-colors hover:bg-petal"
              >
                <Icon name="github" className="h-4 w-4" /> Source Code
              </a>
            )}
          </div>
        )}
      </div>

      <Showcase images={p.images} title={p.title} />

      {p.description && (
        <p className="mb-7 text-[0.98rem] text-ink-soft">{p.description}</p>
      )}

      {blocks.length > 0 && (
        <div className="mb-8 grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {blocks.map(([icon, label, text]) => (
            <div key={label} className="rounded-2xl bg-blush p-5">
              <h4 className="mb-2 flex items-center gap-2 text-base text-rose-deep">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white">
                  <Icon name={icon} className="h-4 w-4" />
                </span>
                {label}
              </h4>
              <p className="text-[0.98rem] text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-dashed border-pink pt-6">
        <h4 className="mb-4 flex items-center gap-2 text-base">
          <Icon name="layers" className="h-5 w-5 text-rose" /> เทคโนโลยีที่ใช้
        </h4>
        {p.tech.map((row) => (
          <div
            key={row.label}
            className="mb-3 grid items-start gap-x-4 gap-y-1 sm:grid-cols-[160px_1fr]"
          >
            <span className="pt-1 text-[0.92rem] text-ink-soft">
              {row.label}
            </span>
            <Chips items={row.items} />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-blush py-[72px] md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading
          icon="briefcase"
          title="ผลงาน"
          sub="โปรเจกต์ที่ฉันเคยพัฒนา"
        />
        {projects.map((p) => (
          <Project key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
