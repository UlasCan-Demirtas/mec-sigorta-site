import { Link } from "react-router-dom";
import { content } from "../data/content";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                {content.company.tagline}
              </div>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                {content.hero.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {content.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/iletisim"
                  className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  {content.hero.primaryCta}
                </Link>
                <Link
                  to="/hizmetler"
                  className="rounded-xl border bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                  Hizmetleri Gör
                </Link>
              </div>

              <ul className="mt-6 grid gap-2 text-sm text-gray-700">
                {content.hero.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-black" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-gray-900">
                Danışman: {content.company.owner}
              </div>
              <div className="mt-1 text-xs text-gray-600">
                {content.company.city} • Hızlı teklif & destek
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.services.items.slice(0, 4).map((s) => (
                  <div key={s.title} className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold">{s.title}</div>
                    <div className="mt-1 text-xs text-gray-600">{s.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-xs text-gray-600">
                * Gerçek görseller daha sonra eklenecek (logo/ofis fotoğrafı/stock).
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900">{content.services.title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">{content.services.subtitle}</p>

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
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-gray-900">{content.why.title}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.why.items.map((i) => (
              <div key={i.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="text-base font-semibold text-gray-900">{i.title}</div>
                <div className="mt-2 text-sm text-gray-600">{i.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/iletisim"
              className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Hemen Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}