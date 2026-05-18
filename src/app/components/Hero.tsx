import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--coffee-dark)]/40 via-[var(--coffee-dark)]/50 to-[var(--coffee-dark)]/90 z-10" />
        <img
          src="/imports/ChatGPT_Image_May_15__2026__03_58_45_PM.png"
          alt="Pulse Specialty Coffee - Sharjah"
          className="w-full h-full object-cover object-[60%_20%]"
        />
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-[var(--coffee-cream)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-[var(--coffee-cream)]" />
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm">
            SHARJAH'S FINEST
          </span>
          <Sparkles className="w-5 h-5 text-[var(--coffee-cream)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6"
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl tracking-tight text-[var(--warm-beige)] mb-4">
            Crafted Coffee
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-[var(--coffee-cream)]">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl text-[var(--warm-beige)]/80 max-w-2xl mx-auto mb-12"
        >
          Specialty coffee brewed with passion in the heart of Sharjah
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
        >
          <motion.a
            href="https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full flex items-center gap-2 transition-all duration-300 relative z-20"
          >
            Explore Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[var(--coffee-cream)] text-[var(--coffee-cream)] rounded-full hover:bg-[var(--coffee-cream)] hover:text-[var(--coffee-dark)] transition-all duration-300 relative z-20"
          >
            Order Online
          </motion.a>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-[var(--coffee-cream)] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-[var(--coffee-cream)] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
