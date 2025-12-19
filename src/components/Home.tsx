// import imgHero from "../assets/Hero.png";
import imgHero from "../assets/Hero2.jpeg";


import imgX from "../assets/icons/x.png"
import imgThreads from "../assets/icons/threads.png"

import imgNathmiArabic from "../assets/nathmiArabic.png";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";

import HeroSection from "./sections/HeroSection";
import BusinessSection from "./sections/BusinessSection";
import LogoCloudSection from "./sections/LogoCloudSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const bauRef = useRef<HTMLDivElement>(null);
  const palastRef = useRef<HTMLDivElement>(null);
  const lighthouseRestaurantRef = useRef<HTMLDivElement>(null);
  const lighthouseHealthRef = useRef<HTMLDivElement>(null);
  const palmeraRef = useRef<HTMLDivElement>(null);
  const businessesSectionRef = useRef<HTMLElement>(null);

  const [bauPosition, setBauPosition] = useState(0);
  const [bauHeight, setBauHeight] = useState(600);
  const [palastPosition, setPalastPosition] = useState(400);
  const [palastHeight, setPalastHeight] = useState(600);
  const [
    lighthouseRestaurantPosition,
    setLighthouseRestaurantPosition,
  ] = useState(800);
  const [
    lighthouseRestaurantHeight,
    setLighthouseRestaurantHeight,
  ] = useState(600);
  const [
    lighthouseHealthPosition,
    setLighthouseHealthPosition,
  ] = useState(1200);
  const [lighthouseHealthHeight, setLighthouseHealthHeight] =
    useState(600);
  const [palmeraPosition, setPalmeraPosition] = useState(1600);
  const [palmeraHeight, setPalmeraHeight] = useState(600);

  useEffect(() => {
    const updatePositions = () => {
      if (!businessesSectionRef.current) return;

      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
      const sectionTop =
        businessesSectionRef.current.getBoundingClientRect()
          .top + scrollTop;

      if (bauRef.current) {
        const rect = bauRef.current.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        setBauPosition(cardTop - sectionTop - 100);
        setBauHeight(rect.height + 200);
      }
      if (palastRef.current) {
        const rect = palastRef.current.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        setPalastPosition(cardTop - sectionTop - 100);
        setPalastHeight(rect.height + 200);
      }
      if (lighthouseRestaurantRef.current) {
        const rect =
          lighthouseRestaurantRef.current.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        setLighthouseRestaurantPosition(
          cardTop - sectionTop - 100,
        );
        setLighthouseRestaurantHeight(rect.height + 200);
      }
      if (lighthouseHealthRef.current) {
        const rect =
          lighthouseHealthRef.current.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        setLighthouseHealthPosition(cardTop - sectionTop - 100);
        setLighthouseHealthHeight(rect.height + 200);
      }
      if (palmeraRef.current) {
        const rect = palmeraRef.current.getBoundingClientRect();
        const cardTop = rect.top + scrollTop;
        setPalmeraPosition(cardTop - sectionTop - 100);
        setPalmeraHeight(rect.height + 200);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    setTimeout(updatePositions, 100);

    return () =>
      window.removeEventListener("resize", updatePositions);
  }, []);

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
      <section
        ref={businessesSectionRef}
        id="businesses"
        className="py-16 sm:py-24 bg-gradient-to-b from-[#0A0B14] to-[#1a1b2e] relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top: `${bauPosition}px`,
            height: `${bauHeight}px`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center left, rgba(217, 39, 39, 0.25), transparent 70%), linear-gradient(to top, #0A0B14 0%, transparent 40%)",
            }}
          />
        </div>

        <div
          className="absolute right-0 w-full pointer-events-none"
          style={{
            top: `${palastPosition}px`,
            height: `${palastHeight}px`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center right, rgba(220, 198, 133, 0.25), transparent 70%), linear-gradient(to top, #0A0B14 0%, transparent 40%)",
            }}
          />
        </div>

        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top: `${lighthouseRestaurantPosition}px`,
            height: `${lighthouseRestaurantHeight}px`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center left, rgba(3, 76, 60, 0.25), transparent 70%), linear-gradient(to top, #0A0B14 0%, transparent 40%)",
            }}
          />
        </div>

        <div
          className="absolute right-0 w-full pointer-events-none"
          style={{
            top: `${lighthouseHealthPosition}px`,
            height: `${lighthouseHealthHeight}px`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center right, rgba(61, 43, 61, 0.25), transparent 100%), linear-gradient(to top, #0A0B14 0%, transparent 40%)",
            }}
          />
        </div>

        <div
          className="absolute left-0 w-full pointer-events-none"
          style={{
            top: `${palmeraPosition}px`,
            height: `${palmeraHeight}px`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center left, rgba(242, 231, 213, 0.25), transparent 100%), linear-gradient(to top, #0A0B14 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12 lg:space-y-16">

            <BusinessSection
              t={t}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection
        t={t}
      />
    </div>
  );
}