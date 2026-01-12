import { useEffect, useMemo, useState } from "react";
import { content } from "../data/content";
import { Link } from "react-router-dom";

function useTypewriter(text: string, speed = 28) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speed);

    return () => clearInterval(t);
  }, [text, speed]);

  return out;
}

export default function Home() {
  const fullTitle = useMemo(() => content.hero.title, []);
  const typedTitle = useTypewriter(fullTitle, 22);

  const miniServices = content.services.items.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100">
        {/* soft background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
          <div className="absolute -bottom-24 right-[-120px] h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* LEFT */}
            <div>
              <span className="inline-block rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-xs font-semibold text-gray-600 backdrop-blur">
                {content.company.tagline}
              </span>

              <h1 className="mt-4 max-w-3xl text-4xl font-bold text-gray-900 sm:text-5xl">
                {typedTitle}
                <span className="type-cursor">|</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm text-gray-600">
                {content.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Teklif Al -> /hizli-teklif */}
                <Link to="/hizli-teklif" className="btn btn-primary">
                  {content.hero.primaryCta}
                </Link>

                {/* İletişime Geç -> /iletisim */}
                <Link to="/iletisim" className="btn btn-outline">
                  {content.hero.secondaryCta}
                </Link>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {content.hero.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-6">
              <div className="card card-pad">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      Danışman
                    </p>
                    <p className="mt-1 text-base font-bold text-gray-900">
                      {content.company.owner}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {content.company.city} • Hızlı teklif & destek
                    </p>
                  </div>

                  <Link
                    to="/hizli-teklif"
                    className="btn btn-primary px-4 py-2 text-xs"
                  >
                    Teklif Al
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {miniServices.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold text-gray-900">
                        {s.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-600">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-xs text-gray-600">
                  • Gerçek görseller daha sonra eklenecek (logo/ofis fotoğrafı/stock).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="section-title">{content.services.title}</h2>
          <p className="section-sub max-w-2xl">{content.services.subtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.items.map((service) => (
              <div
                key={service.title}
                className="card card-pad h-full flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>

                <Link
                  to="/hizli-teklif"
                  className="btn btn-primary mt-auto inline-flex text-sm"
                >
                  Teklif iste
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}