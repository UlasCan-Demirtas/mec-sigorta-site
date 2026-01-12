import { content } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-lg font-semibold">{content.company.name}</div>
        <div className="mt-1 text-sm text-gray-600">
          Sahibi: <span className="font-medium">{content.company.owner}</span>
        </div>
        <p className="mt-4 text-sm text-gray-600 max-w-3xl">{content.footer.note}</p>
        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} {content.company.name}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}