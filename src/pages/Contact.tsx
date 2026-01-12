import { content } from "../data/content";
import { useState } from "react";

function onlyDigits(s: string) {
  return s.replace(/\D/g, "");
}

function normalizePhone(raw: string) {
  let d = onlyDigits(raw);
  if (d.length === 0) d = "05";
  if (!d.startsWith("05")) {
    if (d.startsWith("5")) d = "0" + d;
    else d = "05" + d;
  }
  d = d.slice(0, 11);
  if (d.length < 2) d = "05";
  return d;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("05");
  const [message, setMessage] = useState("");

  const emailOk = email.length === 0 ? false : isValidEmail(email);
  const phoneOk = phone.length === 11 && phone.startsWith("05");
  const nameOk = name.trim().length >= 3;
  const msgOk = message.trim().length >= 10;

  const canSend = emailOk && phoneOk && nameOk && msgOk;

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-bold text-gray-900">{content.contact.title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-gray-600">{content.contact.subtitle}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">İletişim Bilgileri</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <b>Telefon:</b> {content.contact.phone}
            </div>
            <div>
              <b>E-posta:</b> {content.contact.email}
            </div>
            <div>
              <b>Adres:</b> {content.contact.address}
            </div>
            <div className="text-xs text-gray-500">{content.contact.hours}</div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Bize Mesaj Gönderin</h2>

          <form
            className="mt-5 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!canSend) return;
              alert("✅ Demo: Mesaj alındı (backend bağlanınca gerçek gönderim).");
              setName("");
              setEmail("");
              setPhone("05");
              setMessage("");
            }}
          >
            <div className="grid gap-1">
              <input
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Ad Soyad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {!nameOk && name.length > 0 && (
                <p className="text-xs text-red-600">Ad Soyad en az 3 karakter olmalı.</p>
              )}
            </div>

            <div className="grid gap-1">
              <input
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              {!emailOk && email.length > 0 && (
                <p className="text-xs text-red-600">Geçerli bir e-posta girin.</p>
              )}
            </div>

            <div className="grid gap-1">
              <input
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Telefon (05xxxxxxxxx)"
                value={phone}
                onChange={(e) => setPhone(normalizePhone(e.target.value))}
                inputMode="numeric"
              />
              {!phoneOk && (
                <p className="text-xs text-red-600">Telefon 05 ile başlamalı ve 11 hane olmalı.</p>
              )}
            </div>

            <div className="grid gap-1">
              <textarea
                className="min-h-[120px] rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Mesajınız"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
              />
              {!msgOk && message.length > 0 && (
                <p className="text-xs text-red-600">Mesaj en az 10 karakter olmalı.</p>
              )}
              <p className="text-xs text-gray-400 text-right">{message.length}/500</p>
            </div>

            <button
              type="submit"
              disabled={!canSend}
              className={[
                "rounded-xl px-5 py-3 text-sm font-semibold text-white transition",
                canSend ? "bg-[rgb(var(--brand))] hover:opacity-90" : "bg-gray-300 cursor-not-allowed",
              ].join(" ")}
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}