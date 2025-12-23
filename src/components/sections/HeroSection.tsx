import { motion } from "motion/react";

// import imgHero from "../../assets/Hero2.jpeg";
import imgHero from "../../assets/nathmi_clean_cropped.jpg";

type Props = {
    t: any,
    scrollToSection: (id: string) => void
}

export default function HeroSection({
    t,
    scrollToSection,
}: Props){
    return (
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
                <img
                  src={imgHero}
                  alt="Nathmi Abushedeq"
                  className="relative z-10 w-full h-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}