export default function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full bg-petal px-3.5 py-1 text-[0.9rem] leading-[1.7] text-rose-deep">
          {t}
        </span>
      ))}
    </div>
  );
}
