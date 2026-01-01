import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import imgHBSquare from "../assets/hbSquare.png";
import imgPKSquare from "../assets/pkSquare.png";
import { useLanguage } from "./LanguageContext";
import { translations } from "../data/translations";
import { articles } from "../data/articles"

export default function Press() {
  const { language } = useLanguage();
  const t = translations[language];
  const palastRef = useRef<HTMLDivElement>(null);
  const [palastPosition, setPalastPosition] = useState(1350);

  useEffect(() => {
    const updatePosition = () => {
      if (palastRef.current) {
        const rect = palastRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const position = rect.top + scrollTop - 50; // Offset to position gradient nicely above the section
        setPalastPosition(position);
      }
    };

    // Update position on mount and resize
    updatePosition();
    window.addEventListener('resize', updatePosition);

    // Small delay to ensure all content is loaded
    setTimeout(updatePosition, 100);

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  useEffect(() => {
    const element = document.getElementById("press");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white pt-24 pb-16 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-250 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(217, 39, 39, 0.2), transparent 70%)",
        }} />

      <div
        className="absolute right-0 w-full h-250 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(220, 198, 133, 0.2), transparent 70%)",
          top: `${palastPosition}px`
        }}
      />

      <section id="press" className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-10">
            {t.press.title}
          </h1>
          <h1 className="text-3xl">
            {t.press.subtitle}
          </h1>
        </motion.div>
      </section>

      {/* Bau 87 Articles */}
      <section>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg">
              <img
                src={imgHBSquare}
                alt="Hammer Bau"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl">
              Hammer Bau 87
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles["hammer"].map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D92727]/50 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0 } }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#D92727]/0 to-[#D92727]/0 group-hover:from-[#D92727]/10 group-hover:to-[#D92727]/5 rounded-xl transition-all duration-300" />
                <div className="relative z-10">
                  <p className="text-xs text-white/50 mb-3">
                    {article.name} ({article.date})
                  </p>
                  <h4 className="text-white/90 group-hover:text-white transition-colors mb-3 line-clamp-3">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[#D92727] text-sm">
                    <span>{t.press.readArticle}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
      </section>

        {/* Palast Konditorei Articles */}
        <motion.div
          ref={palastRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg">
              <img
                src={imgPKSquare}
                alt="Palast Konditorei"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl">
              Palast Konditorei
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles["palast"].map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#DCC685]/50 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02, transition: {duration:0} }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#DCC685]/0 to-[#DCC685]/0 group-hover:from-[#DCC685]/10 group-hover:to-[#DCC685]/5 rounded-xl transition-all duration-300" />
                <div className="relative z-10">
                  <p className="text-xs text-white/50 mb-3">
                    {article.name} ({article.date})
                  </p>
                  <h4 className="text-white/90 group-hover:text-white transition-colors mb-3 line-clamp-3">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[#DCC685] text-sm">
                    <span>{t.press.readArticle}</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
  );
}