import { useMemo, useState } from "react";
import { content } from "../data/content";

function onlyDigits(s: string) {
  return s.replace(/\D/g, "");
}

function normalizePhone(raw: string) {
  // sadece rakam
  let d = onlyDigits(raw);

  // boşsa 05 ile başlat
  if (d.length === 0) d = "05";

  // 05 ile başlamıyorsa zorla 05 yap
  if (!d.startsWith("05")) {
    // Kullanıcı 5 ile başlarsa 0 ekle
    if (d.startsWith("5")) d = "0" + d;
    else d = "05" + d;
  }

  // 11 hanede kes
  d = d.slice(0, 11);

  // en az "05" kalsın
  if (d.length < 2) d = "05";

  return d;
}

function normalizeTckn(raw: string) {
  return onlyDigits(raw).slice(0, 11);
}

function isValidEmail(email: string) {
  // basit ama yeterli doğrulama
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
}

export default function Quote() {
  const insuranceOptions = useMemo(() => content.quote.insuranceOptions, []);

  const [tckn, setTckn] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("05");
  const [insurance, setInsurance] = useState("");
  const [kvkk, setKvkk] = useState(false);

  const tcknOk = tckn.length === 11;
  const nameOk = name.trim().length >= 3;
  const emailOk = isValidEmail(email);
  const phoneOk = phone.length === 11 && phone.startsWith("05");
  const insuranceOk = insurance.trim().length > 0;
  const kvkkOk = kvkk;

  const canSubmit = tcknOk && nameOk && emailOk && phoneOk && insuranceOk && kvkkOk;

  const inputBase =
    "w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-[rgb(var(--brand))] focus:outline-none";

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-xl">
          <div className="text-xs font-extrabold tracking-widest text-[rgb(var(--brand))]">
            HEMEN
          </div>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Teklif Alın
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Bilgilerinizi bırakın, size en uygun poliçe seçeneklerini hızlıca paylaşalım.
          </p>
        </div>

        <div className="mt-10 max-w-xl">
          {/* TCKN */}
          <label className="block">
            <span className="text-sm font-semibold text-gray-500">TCKN*</span>
            <input
              value={tckn}
              onChange={(e) => setTckn(normalizeTckn(e.target.value))}
              inputMode="numeric"
              placeholder="___________"
              className={inputBase}
            />
            {!tcknOk && tckn.length > 0 && (
              <p className="mt-1 text-xs text-red-500">TCKN 11 hane olmalı.</p>
            )}
          </label>

          {/* Ad Soyad */}
          <label className="mt-8 block">
            <span className="text-sm font-semibold text-gray-500">Ad-Soyad*</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ad Soyad"
              className={inputBase}
              autoComplete="name"
            />
            {!nameOk && name.length > 0 && (
              <p className="mt-1 text-xs text-red-500">En az 3 karakter girin.</p>
            )}
          </label>

          {/* Email + Telefon (yan yana) */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-500">E-posta*</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@mail.com"
                className={inputBase}
                type="email"
                autoComplete="email"
              />
              {!emailOk && email.length > 0 && (
                <p className="mt-1 text-xs text-red-500">Geçerli bir e-posta girin.</p>
              )}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-500">Telefon*</span>
              <input
                value={phone}
                onChange={(e) => setPhone(normalizePhone(e.target.value))}
                onFocus={() => {
                  // focus olunca 05 yoksa ekle
                  setPhone((p) => normalizePhone(p));
                }}
                inputMode="numeric"
                placeholder="05_________"
                className={inputBase}
              />
              {!phoneOk && phone.length > 0 && (
                <p className="mt-1 text-xs text-red-500">
                  Telefon 11 hane olmalı ve 05 ile başlamalı.
                </p>
              )}
            </label>
          </div>

          {/* Sigorta Seçin */}
          <label className="mt-8 block">
            <span className="text-sm font-semibold text-gray-500">Sigorta Seçin*</span>
            <select
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className={[
                "mt-2 w-full border-b border-gray-200 bg-transparent py-2 text-base text-gray-900",
                "focus:border-[rgb(var(--brand))] focus:outline-none",
              ].join(" ")}
            >
              <option value="">Sigorta Seçin</option>
              {insuranceOptions.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
            {!insuranceOk && (
              <p className="mt-1 text-xs text-gray-400">Lütfen bir sigorta türü seçin.</p>
            )}
          </label>

          {/* KVKK */}
          <label className="mt-8 flex items-start gap-3">
            <input
              type="checkbox"
              checked={kvkk}
              onChange={(e) => setKvkk(e.target.checked)}
              className="mt-1 h-5 w-5 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">
              <b>KVKK Metni</b>'ni okudum, kabul ediyorum.
            </span>
          </label>

          {/* Submit */}
          <button
            disabled={!canSubmit}
            onClick={() => {
              alert("Demo ✅ Teklif formu gönderildi (backend bağlanınca gerçek gönderim).");
            }}
            className={[
              "mt-8 inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold text-white",
              "transition",
              canSubmit ? "hover:opacity-95" : "cursor-not-allowed opacity-40",
            ].join(" ")}
            style={{ background: "rgb(220 38 38)" }} // kırmızı ton (istenirse brand yaparız)
          >
            Gönder
          </button>

          <p className="mt-4 text-xs text-gray-400">
            * Bu sayfa demo. Backend bağlanınca e-posta/CRM gönderimi aktif olacak.
          </p>
        </div>
      </section>
    </main>
  );
}