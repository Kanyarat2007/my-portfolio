import { contact } from "../data";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";

const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
  const { email, phone, github, linkedin } = contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("คัดลอกอีเมลเรียบร้อยแล้ว!");
    } catch (error) {
      console.error("Copy email failed:", error);
      alert("ไม่สามารถคัดลอกอีเมลได้");
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      alert("คัดลอกเบอร์โทรศัพท์เรียบร้อยแล้ว!");
    } catch (error) {
      console.error("Copy phone failed:", error);
      alert("ไม่สามารถคัดลอกเบอร์โทรศัพท์ได้");
    }
  };

  const items = [
    { icon: "mail", label: "อีเมล", text: email, onClick: handleCopyEmail },
    {
      icon: "phone",
      label: "โทรศัพท์",
      text: phone,
      href: `tel:${phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: "github",
      label: "GitHub",
      text: strip(github),
      href: github,
      external: true,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      text: "Kanyarat Thinhanwong",
      href: linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-[72px] md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <SectionHeading icon="mail" title="ติดต่อ" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon, label, text, href, external }) => {
            const isCopyable = label === "อีเมล" || label === "โทรศัพท์";

            const cardClass =
              "group flex flex-col items-center rounded-[20px] border border-line bg-white px-5 py-8 text-center no-underline transition duration-300 hover:-translate-y-1 hover:border-pink hover:bg-blush hover:shadow-[0_14px_32px_rgba(217,113,143,0.14)]";

            const cardContent = (
              <>
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-petal text-rose-deep transition-colors group-hover:bg-rose group-hover:text-white">
                  <Icon name={icon} className="h-6 w-6" />
                </span>

                <span className="mb-1 text-[0.9rem] text-ink-soft">
                  {label}
                </span>

                <strong className="break-all font-heading text-[0.95rem] font-medium text-rose-deep">
                  {text}
                </strong>

                {isCopyable && (
                  <span className="mt-2 text-xs text-rose-deep opacity-0 transition group-hover:opacity-100">
                    คลิกเพื่อคัดลอก
                  </span>
                )}
              </>
            );

            return isCopyable ? (
              <button
                key={label}
                type="button"
                onClick={label === "อีเมล" ? handleCopyEmail : handleCopyPhone}
                className={cardClass}
                aria-label={`คัดลอก${label}`}
              >
                {cardContent}
              </button>
            ) : (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cardClass}
              >
                {cardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
