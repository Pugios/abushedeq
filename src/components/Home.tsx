import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";

import HeroSection from "./sections/HeroSection";
import BusinessSection from "./sections/BusinessSection";
import LogoCloudSection from "./sections/LogoCloudSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        t={t}
        scrollToSection={scrollToSection}
      />

      {/* Logo Cloud */}
      <LogoCloudSection
        t={t}
        scrollToSection={scrollToSection}
      />

      {/* Businesses Section */}
      <BusinessSection t={t} />

      {/* Contact Section */}
      <ContactSection t={t} />
    </div>
  );
}