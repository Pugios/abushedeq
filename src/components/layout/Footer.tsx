import { useLanguage } from "../LanguageContext";
import { translations } from "../../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 border-t border-white/10 bg-[#0A0B14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white/60">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}