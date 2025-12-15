import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";
import { useEffect, useRef, useState } from "react";
import svgPaths from "../imports/svg-vymn29r931";
import imgX from "../assets/x.png";
import imgThreads from "../assets/threads.png";

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
  const imageModules = import.meta.glob('../assets/carousel/*', { eager: true });
  const allImages = Object.values(imageModules).map((mod: any) => mod.default);

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