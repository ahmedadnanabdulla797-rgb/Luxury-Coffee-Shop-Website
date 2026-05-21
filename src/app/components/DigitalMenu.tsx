import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  ExternalLink,
  ScanLine,
  Sparkles,
  Coffee,
} from "lucide-react";

export function DigitalMenu() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const menuUrl =
    "https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9";

  return (
    <section
      id="menu"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/imports/pulse-cafe-bg.jpg"
          alt="Pulse Cafe"
          className="w-full h-full object-cover scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* PREMIUM GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[var(--coffee-dark)]/70 to-black" />
      </div>

      {/* BLUR LIGHT EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--coffee-cream)]/10 blur-[130px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full" />

      {/* FLOATING COFFEE ICON */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-24 right-16 hidden lg:block opacity-10"
      >
        <Coffee className="w-32 h-32 text-[var(--coffee-cream)]" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

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

              <span className="text-xs tracking-[0.35em] uppercase text-[var(--warm-beige)]">
                Premium Digital Menu
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            Discover Our
            <span className="block text-[var(--coffee-cream)]">
              Signature Menu
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[var(--warm-beige)]/70 leading-relaxed">
            Experience handcrafted coffee, luxury desserts,
            and premium flavors through our elegant digital
            ordering experience.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="max-w-sm mx-auto"
        >
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] p-8"
          >
            {/* TOP LIGHT */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--coffee-cream)] to-transparent opacity-60" />

            {/* SMALL QR SECTION */}
            <div className="flex justify-center">
              <div className="relative bg-white rounded-3xl p-3 overflow-hidden shadow-2xl">

                <img
                  src="/imports/WhatsApp_Image_2026-05-17_at_8.42.11_PM-1.jpeg"
                  alt="Pulse Cafe QR Menu"
                  className="w-44 h-44 object-cover rounded-2xl"
                />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-[var(--coffee-cream)]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ScanLine className="w-5 h-5 text-[var(--coffee-cream)]" />

                <span className="text-[var(--warm-beige)] tracking-wide">
                  Scan QR Code
                </span>
              </div>

              <h3 className="text-2xl text-white mb-3">
                Instant Ordering
              </h3>

              <p className="text-sm text-[var(--warm-beige)]/60 leading-relaxed">
                Browse our premium menu instantly from your
                phone and enjoy a seamless luxury coffee
                ordering experience.
              </p>
            </div>

            {/* PREMIUM BUTTON */}
            <motion.a
              href={menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[var(--coffee-cream)] px-7 py-4 text-[var(--coffee-dark)] font-medium shadow-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,165,116,0.4)]"
            >
              <ExternalLink className="w-5 h-5" />

              Open Digital Menu
            </motion.a>

            {/* SMALL FOOTER */}
            <p className="mt-5 text-center text-xs text-[var(--warm-beige)]/40">
              Fast • Elegant • Contactless Ordering
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
