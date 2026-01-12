import { Link } from "react-router-dom";
import { content } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
            M
          </span>
          <span>{content.company.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/iletisim"
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          Teklif Al
        </Link>
      </div>
    </header>
  );
}