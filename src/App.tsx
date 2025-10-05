import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import imgLogoWhite from "figma:asset/844a0b69883f8961b18f27beb99fb5fddc426fa1.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Home from "./components/Home";
import Press from "./components/Press";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B14]/30 backdrop-blur-md border-b"
      style={{
        borderImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent) 1'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 overflow-hidden h-10 flex items-center">
            <motion.img
              src={imgLogoWhite}
              alt="Nathmi Abushedeq"
              className="h-8 w-auto object-contain cursor-pointer"
              initial={{ opacity: 0, x: -16 }}
              animate={{
                opacity: (location.pathname !== '/' || scrolled) ? 1 : 0,
                x: (location.pathname !== '/' || scrolled) ? 0 : -16,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={scrollToTop}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("logo-cloud")}
              className="text-white/80 hover:text-white transition-colors text-base"
            >
              Businesses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors text-base"
            >
              Contact
            </button>
            <Link
              to="/press"
              className="text-white/80 hover:text-white transition-colors text-base"
            >
              Press
            </Link>
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
              Businesses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white transition-colors text-base"
            >
              Contact
            </button>
            <Link
              to="/press"
              className="text-white/80 hover:text-white transition-colors text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Press
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#0A0B14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white/60">
          © Mohamed Matar, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0B14] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
