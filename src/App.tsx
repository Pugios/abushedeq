import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
// src/figma-assets.d.ts
declare module "figma:asset/*" {
  const src: string;
  export default src;
}
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Home from "./components/Home";
import Press from "./components/Press";
import About from "./components/About";
import {
  LanguageProvider,
  useLanguage,
} from "./components/LanguageContext";
import { translations } from "./translations";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B14]/30 backdrop-blur-md border-b"
      style={{
        borderImage:
          location.pathname !== "/" || scrolled
            ? "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent) 1"
            : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 overflow-hidden h-10 flex items-center">
            <motion.div
              className="cursor-pointer text-2xl"
              style={{ fontFamily: "Lalezar, sans-serif" }}
              initial={{ opacity: 0, x: -16 }}
              animate={{
                opacity:
                  location.pathname !== "/" || scrolled ? 1 : 0,
                x:
                  location.pathname !== "/" || scrolled
                    ? 0
                    : -16,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={scrollToTop}
            >
              نظمي أبو شدق
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("logo-cloud")}
              className="text-white/80 hover:text-white transition-colors text-base"
            >
              {t.nav.businesses}
            </button>
            <Link
              to="/about"
              className="text-white/80 hover:text-white transition-colors text-base"
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
            >
              {t.nav.press}
            </Link>

            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
              <button
                onClick={() => setLanguage("de")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "de" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="Deutsch"
              >
                🇩🇪
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "en" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "ar" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="العربية"
              >
                🇸🇦
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
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
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.press}
            </Link>

            {/* Language Selector - Mobile */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
              <button
                onClick={() => setLanguage("de")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "de" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="Deutsch"
              >
                🇩🇪
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "en" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`text-2xl hover:scale-110 transition-transform ${language === "ar" ? "ring-2 ring-white/40 rounded" : "opacity-60 hover:opacity-100"}`}
                title="العربية"
              >
                🇸🇦
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
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

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#0A0B14] text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/press" element={<Press />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}