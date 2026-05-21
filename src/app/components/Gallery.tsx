import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-responsive-masonry";
import {
  ZoomIn,
  X,
  Camera,
  Sparkles,
} from "lucide-react";

export function Gallery() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const galleryImages = [
    {
      url: "/imports/ChatGPT_Image_May_15__2026__03_58_45_PM.png",
      alt: "Pulse Cafe Exterior",
    },
    {
      url: "/imports/unnamed__2_.jpg",
      alt: "Luxury latte art",
    },
    {
      url: "/imports/unnamed__4_.jpg",
      alt: "Modern cafe seating",
    },
    {
      url: "/imports/unnamed.jpg",
      alt: "Spanish latte",
    },
    {
      url: "/imports/unnamed__5_.jpg",
      alt: "Pulse cafe logo",
    },
    {
      url: "/imports/unnamed__3_.jpg",
      alt: "Premium desserts",
    },
    {
      url: "/imports/unnamed__1_.jpg",
      alt: "Coffee and cake",
    },
    {
      url: "/imports/coffee-premium.jpg",
      alt: "Luxury espresso shot",
    },
    {
      url: "/imports/cafe-interior.jpg",
      alt: "Warm interior",
    },
    {
      url: "/imports/barista.jpg",
      alt: "Professional barista",
    },
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-32 overflow-hidden bg-[var(--coffee-dark)]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/imports/pulse-cafe-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-15"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--coffee-dark)]/90 to-black" />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--coffee-cream)]/10 blur-[150px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-[var(--coffee-cream)]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[var(--warm-beige)]">
                Luxury Gallery
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl text-white font-light leading-tight mb-6">
            Visual
            <span className="block text-[var(--coffee-cream)]">
              Experience
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[var(--warm-beige)]/70 leading-relaxed">
            Discover the atmosphere, handcrafted coffee,
            elegant interiors, and unforgettable moments
            inside Pulse Speciality Coffee.
          </p>
        </motion.div>

        {/* GALLERY */}
        <Masonry
          columnsCount={3}
          gutter="1.5rem"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[2rem] cursor-pointer"
              onClick={() =>
                setSelectedImage(image.url)
              }
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl group-hover:left-[120%] transition-all duration-1000" />
                </div>

                {/* ICON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 90,
                    }}
                    className="w-16 h-16 rounded-full bg-[var(--coffee-cream)] flex items-center justify-center shadow-2xl"
                  >
                    <ZoomIn className="w-7 h-7 text-[var(--coffee-dark)]" />
                  </motion.div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-[var(--coffee-cream)]" />

                    <span className="text-xs uppercase tracking-[0.25em] text-[var(--coffee-cream)]">
                      Pulse Cafe
                    </span>
                  </div>

                  <h3 className="text-white text-lg">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* IMAGE */}
          <motion.img
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full rounded-[2rem] object-contain shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      )}
    </section>
  );
}
