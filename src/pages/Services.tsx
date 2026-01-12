import { content } from "../data/content";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold text-gray-900">
          {content.services.title}
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          {content.services.subtitle}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service) => (
            <div
              key={service.title}
              className="card card-pad flex min-h-[190px] flex-col"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              </div>

              <Link
                to="/iletisim"
                className="btn btn-primary mt-auto inline-flex w-fit text-sm"
              >
                Teklif iste
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}