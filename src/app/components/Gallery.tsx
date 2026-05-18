const galleryImages = [
  { url: "/imports/ChatGPT_Image_May_15__2026__03_58_45_PM.png", alt: "Pulse Cafe Exterior at Night" },
  { url: "/imports/unnamed__2_.jpg", alt: "Perfect latte art" },
  { url: "/imports/unnamed__4_.jpg", alt: "Modern cafe interior" },
  { url: "/imports/unnamed.jpg", alt: "Spanish Latte with pastry" },
  { url: "/imports/unnamed__5_.jpg", alt: "Pulse cafe signage" },
  { url: "/imports/unnamed__3_.jpg", alt: "Signature desserts" },
  { url: "/imports/unnamed__1_.jpg", alt: "Coffee and cake pairing" },
  { url: "/imports/unnamed__4_.jpg", alt: "Luxury coffee bar" },
];
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-responsive-masonry";
import { ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-responsive-masonry";
import { ZoomIn } from "lucide-react";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "/imports/ChatGPT_Image_May_15__2026__03_58_45_PM.png",
      alt: "Pulse Cafe Exterior at Night",
    },
    {
      url: "/imports/unnamed__2_.jpg",
      alt: "Perfect latte art",
    },
    {
      url: "/imports/unnamed__4_.jpg",
      alt: "Modern cafe interior",
    },
    {
      url: "/imports/unnamed.jpg",
      alt: "Spanish Latte with pastry",
    },
    {
      url: "/imports/unnamed__5_.jpg",
      alt: "Pulse cafe signage",
    },
    {
      url: "/imports/unnamed__3_.jpg",
      alt: "Signature desserts",
    },
    {
      url: "/imports/unnamed__1_.jpg",
      alt: "Coffee and cake pairing",
    },
    {
      url: "/imports/unnamed__4_.jpg",
      alt: "Luxury coffee bar",
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[var(--coffee-brown)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block">
            VISUAL JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--warm-beige)] mb-6">
            Coffee <span className="text-[var(--coffee-cream)]">Gallery</span>
          </h2>
          <p className="text-lg text-[var(--warm-beige)]/70 max-w-2xl mx-auto">
            Every moment captured, every drink a masterpiece
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1.5rem">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--coffee-dark)] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="w-16 h-16 bg-[var(--coffee-cream)] rounded-full flex items-center justify-center"
                >
                  <ZoomIn className="w-8 h-8 text-[var(--coffee-dark)]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[var(--coffee-dark)]/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
}
