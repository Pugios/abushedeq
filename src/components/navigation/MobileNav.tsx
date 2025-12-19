import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

type Props = {
    t: any;
    language: string,
    setLanguage: (lang: "de" | "en" | "ar") => void;
    scrollToSection: (id: string) => void;
    closeMenu: () => void;
}

export default function MobileNav({
    t,
    language,
    setLanguage,
    scrollToSection,
    closeMenu
}: Props) {
    return (
        <div className="md:hidden py-4 space-y-4 flex flex-col items-end">
            <button
                onClick={() => scrollToSection("logo-cloud")}
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.businesses}
            </button>
            <Link
                to="/about"
                className="text-white/80 hover:text-white transition-colors text-base"
                onClick={() => closeMenu}
            >
                {t.nav.about}
            </Link>
            <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-white transition-colors text-base"
            >
                {t.nav.contact}
            </button>
            <Link
                to="/press"
                className="text-white/80 hover:text-white transition-colors text-base"
                onClick={() => closeMenu}
            >
                {t.nav.press}
            </Link>

            {/* Language Selector - Mobile */}
            <LanguageSelector
                language={language}
                setLanguage={setLanguage}
                direction="row"
            />
        </div>
    );
}