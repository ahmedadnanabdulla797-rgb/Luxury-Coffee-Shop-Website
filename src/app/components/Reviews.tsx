import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Ahmed Al Mansouri",
      role: "Regular Customer",
      rating: 5,
      text: "The Spanish Latte here is absolutely incredible! Perfect blend and the ambiance is so relaxing. I come here every morning before work.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    },
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      rating: 5,
      text: "Best specialty coffee in Sharjah! The baristas really know their craft. The matcha latte is my go-to drink. Highly recommend!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Mohammed Hassan",
      role: "Local Resident",
      rating: 5,
      text: "Love the late-night opening hours! The cold brew is fantastic and the atmosphere is perfect for working or meeting friends.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
    },
    {
      name: "Emma Williams",
      role: "Tourist",
      rating: 5,
      text: "Discovered this gem while visiting Sharjah. The coffee quality rivals top cafes in Europe. Beautiful interior design too!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={ref} className="py-24 bg-gradient-to-b from-[var(--coffee-dark)] to-[var(--coffee-brown)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--coffee-cream) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--warm-beige)] mb-6">
            What Our <span className="text-[var(--coffee-cream)]">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[var(--coffee-cream)] fill-[var(--coffee-cream)]" />
            <span className="text-2xl text-[var(--warm-beige)]">4.3 / 5.0</span>
            <Star className="w-6 h-6 text-[var(--coffee-cream)] fill-[var(--coffee-cream)]" />
          </div>
          <p className="text-[var(--warm-beige)]/60">Based on 160+ Google Reviews</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 left-8 w-16 h-16 text-[var(--coffee-cream)] opacity-20" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-20 h-20 rounded-full border-2 border-[var(--coffee-cream)]"
                  />
                  <div>
                    <h3 className="text-xl text-[var(--warm-beige)] mb-1">
                      {reviews[currentIndex].name}
                    </h3>
                    <p className="text-[var(--warm-beige)]/60 text-sm mb-2">
                      {reviews[currentIndex].role}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[var(--coffee-cream)] fill-[var(--coffee-cream)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[var(--warm-beige)]/80 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              className="w-12 h-12 bg-[var(--coffee-cream)] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[var(--coffee-cream)]/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-[var(--coffee-dark)]" />
            </motion.button>

            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[var(--coffee-cream)]"
                      : "w-2 bg-[var(--coffee-cream)]/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              className="w-12 h-12 bg-[var(--coffee-cream)] rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-[var(--coffee-cream)]/30 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-[var(--coffee-dark)]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
