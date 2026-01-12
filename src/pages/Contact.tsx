<div className="m-6 rounded-2xl bg-black p-6 text-white">
  TAILWIND TEST ✅
</div>
import { content } from "../data/content";

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900">{content.contact.title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-gray-600">{content.contact.subtitle}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">İletişim Bilgileri</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div><b>Telefon:</b> {content.contact.phone}</div>
            <div><b>E-posta:</b> {content.contact.email}</div>
            <div><b>Adres:</b> {content.contact.address}</div>
            <div className="text-xs text-gray-500">{content.contact.hours}</div>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Bize Mesaj Gönderin</h2>

          <form
            className="mt-5 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form demo. Backend bağlanınca aktif olacak.");
            }}
          >
            <input className="rounded-xl border px-4 py-3 text-sm" placeholder="Ad Soyad" />
            <input className="rounded-xl border px-4 py-3 text-sm" placeholder="E-posta" />
            <input className="rounded-xl border px-4 py-3 text-sm" placeholder="Telefon" />
            <textarea className="min-h-[120px] rounded-xl border px-4 py-3 text-sm" placeholder="Mesajınız" />
            <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}