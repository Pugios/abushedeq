import image_856a44a1156a10705253ff87d1d49e86bc09fcdf from 'figma:asset/856a44a1156a10705253ff87d1d49e86bc09fcdf.png';
import image_333aa5d64fc9818b1215771a921d3c9eed9c062c from 'figma:asset/333aa5d64fc9818b1215771a921d3c9eed9c062c.png';
import image_07e37c362ac1d9012705c3a22e2fb2d78e30d6f2 from 'figma:asset/07e37c362ac1d9012705c3a22e2fb2d78e30d6f2.png';
import svgPaths from "../imports/svg-vymn29r931";
import imgXWhite1 from "figma:asset/662e8955d5edb34e5342261bd0eec3b02b95bff7.png";
import imgThreads1 from "figma:asset/9b5bb1248641f95cee6a86708cce08dca7f794f7.png";
import imgLighthouseHealthBackground1 from "figma:asset/a1fddef95643b9ae7080eb6de54c9af87d3ca370.png";
import imgLighthouseLogoTransparent from "figma:asset/6905d61d2ecd2a873002ad4583be2d7858b3c72c.png";
import imgLighthouseRestaurantBackground1 from "figma:asset/6606f5cbef21e79f5ffc008a99ecd3278f53cbff.png";
import imgPalastBackground1 from "figma:asset/fe077557d12d477631eb5972b57eb23318c4adc1.png";
import imgPalastKondi from "figma:asset/e0d17e6f6e90561d4b149177ab09826a742f3e8f.png";
import imgBauBackground1 from "figma:asset/54e0fc7350ee6c2fe33b83952f1930951b3079cc.png";
import imgHammerBau from "figma:asset/1d8605050492947cec24948fe5365456752242b2.png";
import imgBauSimple1 from "figma:asset/95a58fe660456dbe84f08b65c5a0cc4475f64daf.png";
import imgPalastLogoSimple1 from "figma:asset/48b2115b05a13022b596082182896f54c2651e9c.png";
import imgLighthouseRestaurantLogo from "figma:asset/8ddc159fda6f536fb9d9fcdb5cd6fc257b49249b.png";
import imgLighthouseHealthLogo from "figma:asset/333aa5d64fc9818b1215771a921d3c9eed9c062c.png";
import imgLighthouseHealthLogoWhite from "figma:asset/11f165bc39c13c4b14c2d73f50bcf6b83e76d93c.png";
import imgPalmeraLogo from "figma:asset/6dcddd0fa33034b51698b2775de79f1fe9aa6356.png";
import imgPalmeraSimple from "figma:asset/760901b4b48b95a944e1aa6a0fe6e160229946be.png";
import imgPalmeraBackground from "figma:asset/c18ab45d95d35e1a7534083046d425e6cf6c36cd.png";
import imgSuit2 from "figma:asset/29607a3d91472bd3358dff7b1ca841d4d551ecc0.png";
import imgLogoWhite from "figma:asset/844a0b69883f8961b18f27beb99fb5fddc426fa1.png";
import imgHealthBackground from "figma:asset/996b71244e0bec2d2b0c2fe93b209665187f7aec.png";

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
                  src={imgSuit2}
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
                  src={imgBauSimple1}
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
                  src={imgPalastLogoSimple1}
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
                  src={imgLighthouseRestaurantLogo}
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
                  src={image_07e37c362ac1d9012705c3a22e2fb2d78e30d6f2}
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
                  src={imgBauBackground1}
                  alt="Hammer Bau Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgHammerBau}
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
                  src={imgPalastBackground1}
                  alt="Palast Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgPalastKondi}
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
                  src={imgLighthouseRestaurantBackground1}
                  alt="Lighthouse Restaurant Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={image_856a44a1156a10705253ff87d1d49e86bc09fcdf}
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
                  src={imgHealthBackground}
                  alt="Lighthouse Health Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="bg-white p-6 rounded-xl flex-shrink-0">
                    <img
                      src={imgLighthouseHealthLogo}
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
                src={imgXWhite1}
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
                src={imgThreads1}
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