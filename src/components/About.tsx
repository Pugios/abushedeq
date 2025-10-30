import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";
import { useEffect, useRef, useState } from "react";
import svgPaths from "../imports/svg-vymn29r931";
import imgXWhite1 from "figma:asset/662e8955d5edb34e5342261bd0eec3b02b95bff7.png";
import imgThreads1 from "figma:asset/9b5bb1248641f95cee6a86708cce08dca7f794f7.png";
import imgAbout1 from "figma:asset/73f002c0922cc62ec050c3206f7f9cc55071ba51.png";
import imgAbout2 from "figma:asset/9735fc06c6be9bc2e6fd6a76bb993fa4d4719ae1.png";
import imgAbout3 from "figma:asset/bb36337a7fa320df680f06ba7e71acc7fba5d71b.png";
import imgAbout4 from "figma:asset/567734555db2157f568b68f9cbeb73ba6e52d7dc.png";
import imgAbout5 from "figma:asset/ec0dfa88c4277d557a503feba61c32af1b581822.png";
import imgAbout6 from "figma:asset/5f0be8e27aef3030b216b677842c54ff43364073.png";
import imgAbout7 from "figma:asset/2e00c361191a8a93fa6fceea3fcd08ca3b5283c0.png";
import imgAbout8 from "figma:asset/b0719d1521cad1e15b646cd90fa0a84ac4fdfc6a.png";
import imgAbout9 from "figma:asset/4e62cb119426f69e882baeec5a10989ecb9ec7d7.png";
import imgAbout10 from "figma:asset/f3548483a64076cb847028f98bef6d9e696f3a13.png";
import imgAbout11 from "figma:asset/9221246daa8885186a91c7c6623d485802c7b6af.png";
import imgAbout12 from "figma:asset/3ac4245613d71c7adcb83a11689cb7d83ec8f2e7.png";
import imgAbout13 from "figma:asset/47f8f81ea407422800e0288e8262c71817984797.png";
import imgAbout14 from "figma:asset/b03dd35810afd2fc842ec3370270df3a7e895efc.png";
import imgAbout15 from "figma:asset/8407ab5e63dbc055b8763dedcfb3eaaf2098b4d8.png";
import imgAbout16 from "figma:asset/be672b3da518b0471090a33d8b4bb2b025bbb244.png";
import imgAbout17 from "figma:asset/5c420566839f4fd3e7a8a3369938e362d8bb7a54.png";
import imgAbout18 from "figma:asset/6d70d28a8667810c73686e58fa24737bc53349a7.png";
import imgAbout19 from "figma:asset/5909d47715f7268369824bfcafd97e7cfd89e24c.png";
import imgAbout20 from "figma:asset/3e135426aeb4f304c550aae9cd4d20e93bcd4944.png";
import imgAbout21 from "figma:asset/7c1c9bb735c9e0c33afa3c181dac519d006a1f61.png";
import imgAbout22 from "figma:asset/67457d513eacffdd82dadc6967dc74e829af11bf.png";
import imgAbout23 from "figma:asset/9172b20b872926803493ee8e0e2d39bd0b6d055a.png";
import imgAbout24 from "figma:asset/eaa6c7f7fe91480013b7d1d8a5c9abeb7faaaada.png";
import imgAbout25 from "figma:asset/999f282e741e784a61349bbb131f6eaeec654414.png";
import imgAbout26 from "figma:asset/dda47c87926a74b7d55002c0aa18412b00c46c6e.png";
import imgAbout27 from "figma:asset/d17ec63d406f525eaab8a650ab9946b025686f4f.png";
import imgAbout28 from "figma:asset/9e0515058f77cf3f4f438011fa3bac8293b4bc1d.png";
import imgAbout29 from "figma:asset/d2549f624f13f43e9d61e97d6ce10ddcf057a801.png";
import imgAbout30 from "figma:asset/8cdc3fad7018e9e7640aa575d5e40892a9e6fdb8.png";
import imgAbout31 from "figma:asset/f88ccb439c12ce20553f43cb2cf5c98c5bf72d7c.png";
import imgAbout32 from "figma:asset/a909e7110cbcb98d75d0b1f3b08f51347a4709bd.png";
import imgAbout33 from "figma:asset/63dc94c1c3bf9c79eda170f765d04b1610f1b68e.png";
import imgAbout34 from "figma:asset/e0f1b47e6a6d3e137ef4b88cc75c4bfced51f84e.png";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const [selectedImage, setSelectedImage] = useState<
    number | null
  >(null);
  const dragDistanceRef = useRef(0);

  // Gallery images - personal photos only
  const allImages = [
    imgAbout1,
    imgAbout2,
    imgAbout3,
    imgAbout4,
    imgAbout5,
    imgAbout6,
    imgAbout7,
    imgAbout8,
    imgAbout9,
    imgAbout10,
    imgAbout11,
    imgAbout12,
    imgAbout13,
    imgAbout14,
    imgAbout15,
    imgAbout16,
    imgAbout17,
    imgAbout18,
    imgAbout19,
    imgAbout20,
    imgAbout21,
    imgAbout22,
    imgAbout23,
    imgAbout24,
    imgAbout25,
    imgAbout26,
    imgAbout27,
    imgAbout28,
    imgAbout29,
    imgAbout30,
    imgAbout31,
    imgAbout32,
    imgAbout33,
    imgAbout34,
  ];

  // Duplicate all images for seamless infinite scroll
  const galleryImages = [...allImages, ...allImages];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (
        !scrollContainer ||
        isPaused ||
        isDragging ||
        selectedImage !== null
      )
        return;

      scrollPositionRef.current += scrollSpeed;

      // Reset position for seamless loop
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }

      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, isDragging, selectedImage]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStartXRef.current = e.pageX;
    dragScrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollPositionRef.current = scrollRef.current.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (dragStartXRef.current - x) * 2; // Multiply by 2 for faster scrolling
    dragDistanceRef.current = Math.abs(walk);
    const newScrollLeft = dragScrollLeftRef.current + walk;
    scrollRef.current.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;

    // Handle seamless loop during drag
    const maxScroll = scrollRef.current.scrollWidth / 2;
    if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = 0;
      scrollRef.current.scrollLeft = 0;
      dragScrollLeftRef.current = 0;
      dragStartXRef.current = e.pageX;
    } else if (scrollPositionRef.current < 0) {
      scrollPositionRef.current = maxScroll - 1;
      scrollRef.current.scrollLeft = maxScroll - 1;
      dragScrollLeftRef.current = maxScroll - 1;
      dragStartXRef.current = e.pageX;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleImageClick = (index: number) => {
    // Only open if not dragging (threshold of 5px)
    if (dragDistanceRef.current < 5) {
      setSelectedImage(index % allImages.length);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(217, 39, 39, 0.15), transparent 60%)",
          }}
        />
      </div>
      <div className="absolute top-[600px] right-0 w-full h-[800px] pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[800px] h-[800px]"
          style={{
            background:
              "radial-gradient(circle, rgba(220, 198, 133, 0.15), transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
            {t.about.title}
          </h1>
        </motion.div>

        {/* Scrolling Image Gallery */}
        <motion.div
          className="mb-24 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              scrollBehavior: "auto",
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: isDragging ? 1 : 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-8 text-center">
            {t.about.bioTitle}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed text-center">
            {t.about.bio}
          </p>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Media Buttons */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
            {selectedImage + 1} / {allImages.length}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + allImages.length) %
                  allImages.length,
              );
            }}
            className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage + 1) % allImages.length,
              );
            }}
            className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
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
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            src={allImages[selectedImage]}
            alt={`Gallery ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}