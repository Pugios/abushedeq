import { motion } from "motion/react";
import svgPaths from "../../assets/icons/svg-vymn29r931";

import imgX from "../../assets/icons/x.png";
import imgThreads from "../../assets/icons/threads.png";

type Props = {
    t: any
}

export default function ContactSection({
    t
}: Props){
    return (
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
                    d={svgPaths.location.path}
                    stroke="#B3B3B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="20"
                  />
                  <path
                    d={svgPaths.location_dot.path}
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
                    d={svgPaths.mail.path}
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
                    d={svgPaths.phone.path}
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
                  d={svgPaths.instagram.path}
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
                  d={svgPaths.facebook.path}
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
    );
}