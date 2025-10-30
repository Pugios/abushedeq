import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import imgHammerBauLogo from "figma:asset/070b048162e54b55e805df413fcf394b9a20f33b.png";
import imgPalastKonditoreiLogo from "figma:asset/4695992f5b4bd9028582c951749270da9e386436.png";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";

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

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[1000px] h-[1000px]"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(217, 39, 39, 0.2), transparent 70%)",
          }}
        />
      </div>
      <div 
        className="absolute right-0 w-full h-[1000px] pointer-events-none"
        style={{ top: `${palastPosition}px` }}
      >
        <div
          className="absolute top-0 right-0 w-[1000px] h-[1000px]"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(220, 198, 133, 0.2), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 px-[0px] py-[15px] mb-[200px] mt-[40px] mr-[0px] mb-[150px] ml-[0px]">
            {t.press.title} <br></br>{t.press.subtitle}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto"></p>
        </motion.div>

        {/* Bau 87 Articles */}
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
                src={imgHammerBauLogo}
                alt="Hammer Bau"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl">
              Hammer Bau 87
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title:
                  "Baukosten steigen: Die Auswirkungen steigender Rohstoffpreise auf die Baubranche",
                name: "Haustechnik Dialog",
                date: "22.12.2023",
                url: "https://www.haustechnikdialog.de/News/28713/Baukosten-steigen-Die-Auswirkungen-steigender-Rohstoffpreise-auf-die-Baubranche?showcode=1271a7029c",
              },
              {
                title: "Maler Magazin Ausgabe 2/2024",
                name: "Maler TV",
                date: "Feb 2024",
                url: "https://emag-maler.krammergroup.de/maler_2_2024/",
              },
              {
                title:
                  "Die Herausforderungen der Bauwirtschaft",
                name: "Berliner Nachrichten",
                date: "02.05.2024",
                url: "https://berlinernachrichten.com/2024-05/die-herausforderungen-der-bauwirtschaft-18594",
              },
              {
                title:
                  "Die Herausforderungen der Bauwirtschaft",
                name: "Fachbeitrag",
                date: "02.05.2024",
                url: "https://fachbeitrag.de/2024/05/02/die-herausforderungen-der-bauwirtschaft/",
              },
              {
                title:
                  "Die Zukunft des Bauens: Wie KI und Robotik die Baubranche revolutionieren",
                name: "Berliner Sonntagsblatt",
                date: "02.05.2024",
                url: "https://www.berliner-sonntagsblatt.de/Die-Zukunft-des-Bauens-Wie-KI-und-Robotik-die-Baubranche-revolutionieren--308823.html",
              },
              {
                title:
                  "Innovatives Bauen: Die Zukunft des Bauwesens in Berlin",
                name: "Welt Journal",
                date: "10.05.2024",
                url: "https://weltjournal.de/innovatives-bauen-die-zukunft-des-bauwesens-in-berlin/",
              },
              {
                title:
                  "Innovatives Bauen: Die Zukunft des Bauwesens in Berlin",
                name: "go-with-us.de",
                date: "10.05.2024",
                url: "https://www.go-with-us.de/innovatives-bauen-die-zukunft-des-bauwesens-in-berlin/",
              },
              {
                title:
                  "Innovatives Bauen: Die Zukunft des Bauwesens in Berlin",
                name: "Marbach Academy",
                date: "10.05.2024",
                url: "https://www.marbach-academy.de/innovatives-bauen-die-zukunft-des-bauwesens-in-berlin/",
              },
              {
                title:
                  "Erfolgsstrategien in der Baubranche: Bewährte Methoden im Überblick",
                name: "United Networker",
                date: "30.05.2024",
                url: "https://www.unitednetworker.com/erfolgsstrategien-in-der-baubranche-bewaehrte-methoden-im-ueberblick/",
              },
              {
                title: "Craft in Hand Magazin",
                name: "Handwerk",
                date: "Sep 2024",
                url: "https://www.handwerke.de/pdf/CiH_8-9-24.pdf",
              },
              {
                title:
                  "Erfolgreich in der Baubranche: Strategien für angehende Unternehmer",
                name: "Janes Magazin",
                date: "04.09.2024",
                url: "https://janes-magazin.de/erfolgreich-in-der-baubranche-strategien-fuer-angehende-unternehmer",
              },
              {
                title:
                  "Erfolgreiche Bauunternehmer*innen in Berlin: Strategien und Herausforderungen",
                name: "Unternehmer",
                date: "11.09.2024",
                url: "https://unternehmer.de/immobilien/496781-erfolgreiche-bauunternehmerinnen-in-berlin-strategien-und-herausforderungen",
              },
            ].map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D92727]/50 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D92727]/0 to-[#D92727]/0 group-hover:from-[#D92727]/10 group-hover:to-[#D92727]/5 rounded-xl transition-all duration-300" />
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
                src={imgPalastKonditoreiLogo}
                alt="Palast Konditorei"
                className="h-16 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl">
              Palast Konditorei
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title:
                  "Feinschmecker und Tradition: Warum handgemachte Süßwaren im Trend liegen",
                name: "Janes Magazin",
                date: "05.11.2024",
                url: "https://janes-magazin.de/feinschmecker-und-tradition-warum-handgemachte-suesswaren-im-trend-liegen",
              },
              {
                title:
                  "Nüsse und Tradition: Das Geheimnis des perfekten Baklavas",
                name: "Welt Journal",
                date: "11.11.2024",
                url: "https://weltjournal.de/nuesse-und-tradition-das-geheimnis-des-perfekten-baklavas/",
              },
              {
                title:
                  "Familie und Geschmack: Was Süßwaren uns lehren können",
                name: "Marbach Academy",
                date: "15.11.2024",
                url: "https://www.marbach-academy.de/familie-und-geschmack-was-suesswaren-uns-lehren-koennen/",
              },
              {
                title:
                  "Warum handgemachte Süßwaren im Trend liegen",
                name: "go-with-us.de",
                date: "15.11.2024",
                url: "https://www.go-with-us.de/warum-handgemachte-suesswaren-im-trend-liegen/",
              },
              {
                title:
                  "Warum echte Handarbeit in der Konditorei unersetzlich ist",
                name: "Berliner Sonntagsblatt",
                date: "15.11.2024",
                url: "https://www.berliner-sonntagsblatt.de/Warum-echte-Handarbeit-in-der-Konditorei-unersetzlich-ist-320013.html",
              },
            ].map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#DCC685]/50 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCC685]/0 to-[#DCC685]/0 group-hover:from-[#DCC685]/10 group-hover:to-[#DCC685]/5 rounded-xl transition-all duration-300" />
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
    </div>
  );
}