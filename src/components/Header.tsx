import { NavLink, useNavigate } from "react-router-dom";
import { content } from "../data/content";
import { PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "border-b border-gray-200 bg-white/90 backdrop-blur shadow-sm"
          : "border-b border-transparent bg-white/70 backdrop-blur",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all",
          scrolled ? "py-2" : "py-4",
        ].join(" ")}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
          aria-label="Ana sayfa"
        >
          <img
            src="/logo.png"
            alt={content.company.name}
            className={["w-auto transition-all", scrolled ? "h-16" : "h-20"].join(" ")}
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-gray-900">
              {content.company.name}
            </div>
            <div className="text-xs text-gray-500">Sigorta Danışmanlığı</div>
          </div>
        </button>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {content.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                isActive ? "navlink navlink-active" : "navlink"
              }
            >
              {item.label}
              <span className="navlink-underline" />
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          {/* İletişim (mesaj formu burada) */}
          <button
            onClick={() => navigate("/iletisim")}
            className={[
              "hidden rounded-xl border px-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:inline-flex",
              scrolled ? "py-2" : "py-2.5",
            ].join(" ")}
          >
            İletişim
          </button>

          {/* Hızlı Teklif (Quote formu) */}
          <button
            onClick={() => navigate("/hizli-teklif")}
            className={[
              "inline-flex items-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition hover:opacity-90",
              scrolled ? "py-2" : "py-2.5",
            ].join(" ")}
            style={{ background: "rgb(var(--brand))" }}
          >
            <PhoneCall className="h-4 w-4" />
            Hızlı Teklif
          </button>
        </div>
      </div>
    </header>
  );
}