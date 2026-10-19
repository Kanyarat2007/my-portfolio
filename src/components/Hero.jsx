import { hero } from "../data";
import Icon from "./Icons";

export default function Hero() {
  const { name, role, intro, photo } = hero;
  return (
    <header id="top" className="relative overflow-hidden bg-gradient-to-b from-blush to-white py-[72px] md:py-[120px]">
      {/* ลายตกแต่งพื้นหลัง */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-petal blur-3xl" />

      <div className="relative mx-auto grid max-w-[1000px] items-center gap-14 px-6 text-center md:grid-cols-[1.4fr_1fr] md:text-left">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[0.9rem] text-rose-deep">
            <Icon name="heart" className="h-4 w-4" /> ยินดีต้อนรับสู่ Portfolio ของฉัน
          </p>
          <h1 className="mb-3 text-[clamp(2.2rem,5vw,3.4rem)]">สวัสดี</h1>
          <h1 className="mb-3 text-[clamp(2.2rem,5vw,3.4rem)]">{name}</h1>
          <p className="mb-5 font-heading text-xl text-rose-deep">{role}</p>
          <p className="mx-auto mb-8 max-w-[46ch] text-ink-soft md:mx-0">{intro}</p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3 font-medium text-white no-underline shadow-[0_8px_20px_rgba(217,113,143,0.3)] transition hover:-translate-y-0.5 hover:bg-rose-deep">
              ดูผลงานของฉัน <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-pink bg-white px-7 py-3 font-medium text-rose-deep no-underline transition-colors hover:bg-petal">
              <Icon name="mail" className="h-4 w-4" /> ติดต่อฉัน
            </a>
          </div>
        </div>

        {/* <div className="order-first mx-auto grid aspect-square w-[220px] place-items-center overflow-hidden rounded-full border-8 border-white bg-petal text-center text-[0.95rem] text-rose shadow-[0_0_0_2px_var(--color-pink),0_20px_50px_rgba(217,113,143,0.18)] md:order-none md:w-full md:max-w-[320px]">
          {photo ? (
            <img src={photo} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span className="flex flex-col items-center gap-2">
              <Icon name="user" className="h-10 w-10" />
              วางรูปของคุณ<br />ที่ photo ใน data.js
            </span>
          )}
        </div> */}
      </div>
    </header>
  );
}
