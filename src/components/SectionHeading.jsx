import Icon from "./Icons";

export default function SectionHeading({ icon, title, sub }) {
  return (
    <div className="mb-12">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-petal text-rose-deep shadow-[0_6px_16px_rgba(217,113,143,0.15)]">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        <h2 className="text-[2rem]">{title}</h2>
      </div>
      <p className="max-w-[60ch] text-ink-soft">{sub}</p>
    </div>
  );
}
