// import imgHero from "../assets/Hero.png";
import imgHero from "../assets/Hero2.jpeg";

import imgPalmeraSimple from "../assets/palSimple.png";
import imgLHHSimple from "../assets/lhhSimple.png";
import imgHBSimple from "../assets/hbSimple.png";
import imgLHRSimple from "../assets/lhrSimple.png";
import imgPKSimple from "../assets/pkSimple.png";

import imgHBLogo from "../assets/hbLogo.png";
import imgHBBackground from "../assets/hbBackground.png";

import imgPKLogo from "../assets/pkLogo.png";
import imgPKBackground from "../assets/pkBackground.png";

import imgLHRLogo from '../assets/lhrLogo.png';
import imgLHRBackground from "../assets/lhrBackground.png";

import imgLHHLogo from "../assets/lhhLogo.png";
import imgLHHBackground from "../assets/lhhBackground.png";

import imgPalmeraLogo from "../assets/palLogo.png";
import imgPalmeraBackground from "../assets/palBackground.png";

import svgPaths from "../imports/svg-vymn29r931";
import imgX from "../assets/x.png";
import imgThreads from "../assets/threads.png";

import imgNathmiArabic from "../assets/nathmiArabic.png";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(
    null,
  );
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
      <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, rgba(238, 42, 53, 0.4), transparent 50%, rgba(10, 11, 20, 0.8)),
              linear-gradient(to bottom, rgba(10, 11, 20, 0.8), rgba(10, 11, 20, 0.8), rgba(0, 151, 54, 0.4))
            `,
          }}
        />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-24">
            <motion.div
              className="flex-1 text-right order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t.hero.title1} <br></br>
                  {t.hero.title2}
                </motion.span>
              </h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl ml-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="ml-auto px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg backdrop-blur-sm transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.cta}
              </motion.button>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src={imgHero}
                  alt="Nathim Abushedeq"
                  className="relative z-10 w-full h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section
        id="logo-cloud"
        className="py-16 sm:py-24 bg-[#0A0B14]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Hammer Bau - Full Width */}
            <motion.div
              className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r cursor-pointer relative"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredLogo("hammer-bau")}
              onMouseLeave={() => setHoveredLogo(null)}
              onClick={() => scrollToSection("hammer-bau")}
            >
              <motion.div
                className="absolute -inset-0"
                animate={{
                  opacity: hoveredLogo === "hammer-bau" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(217, 39, 39, 0.4), transparent 30%, transparent 70%, rgba(217, 39, 39, 0.4))",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y: hoveredLogo === "hammer-bau" ? -12 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={imgHBSimple}
                  alt="Hammer Bau"
                  className="h-40 lg:h-32 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Palast Konditorei */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 border-r border-b lg:border-b-0 cursor-pointer relative"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transitionDelay={{ delay: 0.1 }}
              onMouseEnter={() => setHoveredLogo("palast")}
              onMouseLeave={() => setHoveredLogo(null)}
              onClick={() =>
                scrollToSection("palast-konditorei")
              }
            >
              <motion.div
                className="absolute -inset-1"
                animate={{
                  opacity: hoveredLogo === "palast" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(220, 198, 133, 0.5), transparent 25%, transparent 75%, rgba(220, 198, 133, 0.3))",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y: hoveredLogo === "palast" ? -12 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={imgPKSimple}
                  alt="Palast Konditorei"
                  className="h-40 lg:h-32 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Palmera */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r cursor-pointer relative"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transitionDelay={{ delay: 0.2 }}
              onMouseEnter={() => setHoveredLogo("palmera")}
              onMouseLeave={() => setHoveredLogo(null)}
              onClick={() => scrollToSection("palmera")}
            >
              <motion.div
                className="absolute -inset-1"
                animate={{
                  opacity: hoveredLogo === "palmera" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(242, 231, 213, 0.5), transparent 25%, transparent 75%, rgba(242, 231, 213, 0.3))",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y: hoveredLogo === "palmera" ? -12 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={imgPalmeraSimple}
                  alt="Palmera"
                  className="h-40 lg:h-32 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Lighthouse Restaurant */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 border-r lg:border-r cursor-pointer relative"
              style={{
                borderImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.6), rgba(0,0,0,0)) 1",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transitionDelay={{ delay: 0.3 }}
              onMouseEnter={() =>
                setHoveredLogo("lighthouse-restaurant")
              }
              onMouseLeave={() => setHoveredLogo(null)}
              onClick={() =>
                scrollToSection("lighthouse-restaurant")
              }
            >
              <motion.div
                className="absolute -inset-1"
                animate={{
                  opacity:
                    hoveredLogo === "lighthouse-restaurant"
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(3, 76, 60, 0.6), transparent 25%, transparent 75%, rgba(3, 76, 60, 0.4))",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y:
                    hoveredLogo === "lighthouse-restaurant"
                      ? -12
                      : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={imgLHRSimple}
                  alt="Lighthouse Restaurant"
                  className="h-40 lg:h-32 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Lighthouse Health */}
            <motion.div
              className="flex flex-col items-center justify-center p-8 cursor-pointer relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transitionDelay={{ delay: 0.4 }}
              onMouseEnter={() =>
                setHoveredLogo("lighthouse-health")
              }
              onMouseLeave={() => setHoveredLogo(null)}
              onClick={() =>
                scrollToSection("lighthouse-health")
              }
            >
              <motion.div
                className="absolute -inset-4"
                animate={{
                  opacity:
                    hoveredLogo === "lighthouse-health" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(to right, rgba(61, 43, 61, 0.5), transparent 30%, transparent 70%, rgba(61, 43, 61, 0.5))",
                  pointerEvents: "none",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  y:
                    hoveredLogo === "lighthouse-health"
                      ? -12
                      : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={imgLHHSimple}
                  alt="Lighthouse Health"
                  className="h-40 lg:h-32 w-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
            {/* Hammer Bau */}
            <motion.div
              ref={bauRef}
              id="hammer-bau"
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={imgHBBackground}
                  alt="Hammer Bau Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgHBLogo}
                      alt="Hammer Bau Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      {t.businesses.hammerBau.title}
                    </h2>
                    <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                      {t.businesses.hammerBau.description}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="https://www.hb87-web.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p8ed3300}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/HammerBau87/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p30853400}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/hammer.bau87/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p8845a00}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Palast Konditorei */}
            <motion.div
              ref={palastRef}
              id="palast-konditorei"
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={imgPKBackground}
                  alt="Palast Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgPKLogo}
                      alt="Palast Konditorei Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      {t.businesses.palast.title}
                    </h2>
                    <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                      {t.businesses.palast.description}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="https://www.palast-konditorei.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.pdb457c0}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/share/19tDw4abBi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p27a2eec0}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/palastkonditorei"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p2b4c800}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/@palast.konditorei"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lighthouse Restaurant */}
            <motion.div
              ref={lighthouseRestaurantRef}
              id="lighthouse-restaurant"
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={imgLHRBackground}
                  alt="Lighthouse Restaurant Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgLHRLogo}
                      alt="Lighthouse Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      {t.businesses.lighthouseRestaurant.title}
                    </h2>
                    <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                      {
                        t.businesses.lighthouseRestaurant
                          .description
                      }
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="https://lighthouse-restaurant.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p101abe80}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/lighthouse__resturant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p30812580}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61573896891934"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p27a2eec0}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/@lighthouse.berlin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lighthouse Health */}
            <motion.div
              ref={lighthouseHealthRef}
              id="lighthouse-health"
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={imgLHHBackground}
                  alt="Lighthouse Health Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgLHHLogo}
                      alt="Lighthouse Health Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      {t.businesses.lighthouseHealth.title}
                    </h2>
                    <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                      {
                        t.businesses.lighthouseHealth
                          .description
                      }
                    </p>

                    <div className="flex gap-4">
                      <a
                        href="http://lighthouse-health.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p101abe80}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </a>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p3693fe80}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Palmera */}
            <motion.div
              ref={palmeraRef}
              id="palmera"
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={imgPalmeraBackground}
                  alt="Palmera Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgPalmeraLogo}
                      alt="Palmera Logo"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      {t.businesses.palmera.title}
                    </h2>
                    <p className="text-white/70 mb-6 max-w-2xl text-sm sm:text-base">
                      {t.businesses.palmera.description}
                    </p>

                    <div className="flex gap-4">
                      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p30812580}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 103 103"
                        >
                          <path
                            d={svgPaths.p27a2eec0}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="10"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-[#1a1b2e]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <div
              // className="h-12 sm:h-16 lg:h-20 flex items-center justify-center mb-6"
              style={language === 'ar' ? { fontFamily: "Lalezar, sans-serif" } : {}}
            > */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-6">
              {t.contact.hero}
            </h1>
            {/* </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center">
              {t.contact.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 max-w-md md:max-w-none mx-auto">
            {/* Headquarters */}
            <motion.div
              className="flex md:flex-col items-center gap-4 md:gap-0 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 md:mb-4 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 164 164"
                >
                  <path
                    d={svgPaths.p9aa6400}
                    stroke="#B3B3B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                  <path
                    d={svgPaths.p2abec500}
                    stroke="#B3B3B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                </svg>
              </div>
              <div className="flex-1 md:flex-none">
                <p className="text-xs text-white/60 mb-2">
                  {t.contact.headquarters}
                </p>
                <p className="text-sm sm:text-base">
                  <a
                    href="https://maps.app.goo.gl/tkW2E1TjFR8roPH9A"
                    className="text-sm sm:text-base hover:text-white/80 transition-colors"
                    target="_blank"
                  >
                    Lessingstraße 10,
                    <br />
                    10555 Berlin
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex md:flex-col items-center gap-4 md:gap-0 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 md:mb-4 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 164 164"
                >
                  <path
                    d={svgPaths.p9b8e900}
                    stroke="#B3B3B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                </svg>
              </div>
              <div className="flex-1 md:flex-none">
                <p className="text-xs text-white/60 mb-2">
                  {t.contact.email}
                </p>
                <a
                  href="mailto:nathmi@abushedeq.de"
                  className="text-sm sm:text-base hover:text-white/80 transition-colors"
                >
                  nathmi@abushedeq.de
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex md:flex-col items-center gap-4 md:gap-0 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 md:mb-4 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 155 155"
                >
                  <path
                    d={svgPaths.p10742a80}
                    stroke="#B3B3B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                </svg>
              </div>
              <div className="flex-1 md:flex-none">
                <p className="text-xs text-white/60 mb-2">
                  {t.contact.phone}
                </p>
                <p className="text-sm sm:text-base">
                  <a
                    href="tel:+4917655444445"
                    className="text-sm sm:text-base hover:text-white/80 transition-colors"
                  >
                    +49 176 5544-4445
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/nathmi_abushedeq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 103 103"
              >
                <path
                  d={svgPaths.p30812580}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </svg>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="https://x.com/abu_shedeq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={imgX}
                alt="X"
                className="w-5 h-5"
              />
            </motion.a>

            {/* Threads */}
            <motion.a
              href="https://www.threads.com/@nathmi_abushedeq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={imgThreads}
                alt="Threads"
                className="w-5 h-5"
              />
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/nathme.Abushedeq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 108 108"
              >
                <path
                  d={svgPaths.p27a2eec0}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}