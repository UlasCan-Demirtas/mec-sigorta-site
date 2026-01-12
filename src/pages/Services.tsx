import { Link } from "react-router-dom";
import { content } from "../data/content";

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h1>
      <p className="mt-2 max-w-2xl text-sm text-gray-600">
        {content.services.subtitle}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.services.items.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-base font-semibold text-gray-900">{s.title}</div>
            <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
            <Link
              to="/iletisim"
              className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Teklif İste
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}