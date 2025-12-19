import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { translations } from "../../translations";
import { useLanguage } from "../LanguageContext";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";


export default function Navigation() {
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
          <DesktopNav
          t={t}
          language={language}
          setLanguage={setLanguage}
          scrollToSection={scrollToSection}
          />

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
            <MobileNav
            t={t} 
            language={language}
            setLanguage={setLanguage}
            scrollToSection={scrollToSection}
            closeMenu={() => setMobileMenuOpen(false)}
            />
        )}
      </div>
    </nav>
  );
}