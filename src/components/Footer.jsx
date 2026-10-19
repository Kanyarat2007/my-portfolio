import { hero } from "../data";
import Icon from "./Icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 border-t border-line px-6 py-8 text-center text-[0.9rem] text-ink-soft">
      © {new Date().getFullYear()} {hero.name}
      <Icon name="heart" className="h-4 w-4 text-pink" />
    </footer>
  );
}
