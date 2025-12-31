import { motion } from "motion/react";
import { useState, useEffect } from "react";

// import imgHero from "../../assets/Hero2.jpeg";
import imgHero from "../../assets/nathmi_clean_cropped.jpg";

type Props = {
  t: any,
  scrollToSection: (id: string) => void
}

export default function HeroSection({
  t,
  scrollToSection,
}: Props) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const subtitles = Array.isArray(t.hero.subtitle) ? t.hero.subtitle : [t.hero.subtitle];

  useEffect(() => {
    if (subtitles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2000); // 2 second delay

    return () => clearInterval(interval);
  }, [subtitles.length]);
  return (
  <section className="relative h-screen pt-16 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          background: `
              linear-gradient(to right, rgba(42, 55, 238, 0.4), transparent 50%, rgba(10, 11, 20, 0.8)),
              linear-gradient(to bottom, rgba(10, 11, 20, 0.8), rgba(10, 11, 20, 0.8), rgba(211, 211, 211, 0.4))
            `,
        }}
      />

      {/* Desktop Layout */}
      <div className="relative hidden lg:flex flex-row items-center">
        
        {/* Text & Button */}
        <div className="flex-1 flex-col">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.title1} <br></br>
            {t.hero.title2}
          </motion.h1>

          <motion.p
            className="text-4xl text-white max-w-xl ml-auto mb-8 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.span
              key={currentSubtitleIndex}
              initial={{ opacity: 0, y: -20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, rotateX: -90 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {subtitles[currentSubtitleIndex]}
            </motion.span>
          </motion.p>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="block ml-auto px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta}
          </motion.button>
        </div>

        {/* Image */}
        <motion.img
          className="flex flex-1 w-1/2 h-1/2 justify-center lg:justify-start order-2 relative z-10 object-contain rounded-2xl px-[193px] py-[0px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={imgHero}
          alt="Nathmi Abushedeq"
        >
        </motion.img>
      </div>

      {/* Mobile Layout */}
      <div className="relative lg:hidden w-full h-full flex flex-col">
        {/* Text Content - Top Part */}
        <div className="flex-shrink-0 px-6 pt-4 z-20">
          <motion.h1
            className="text-4xl sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.title1} <br></br>
            {t.hero.title2}
          </motion.h1>

          <motion.p
            className="text-3xl text-white/70 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.span
              key={currentSubtitleIndex}
              initial={{ opacity: 0, y: -20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, rotateX: -90 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {subtitles[currentSubtitleIndex]}
            </motion.span>
          </motion.p>
        </div>

        {/* Image - Bottom Part with CTA on top */}
        <div className="relative flex-1 w-full">
          <motion.img
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={imgHero}
            alt="Nathmi Abushedeq"
          />
          
          {/* CTA Button positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-30">
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="w-full px-8 py-4 bg-white/10 hover:bg-white/20 border-t border-white/20 hover:border-white/40 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}