import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

type Props = {
    t: any;
    language: string,
    setLanguage: (lang: "de" | "en" | "ar") => void;
    scrollToSection: (id: string) => void;
}

export default function DesktopNav({
    t,
    language,
    setLanguage,
    scrollToSection
}: Props) {
    return (
        <div className="hidden md:flex items-center space-x-8">
            <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.contact}
            </button>
            <Link
                to="/about"
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.about}
            </Link>
            <Link
                to="/press"
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.press}
            </Link>
            <button
                onClick={() => scrollToSection("logo-cloud")}
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.businesses}
            </button>

            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
            />
        </div>
    );
}