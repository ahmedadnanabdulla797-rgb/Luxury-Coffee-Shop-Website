import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  ExternalLink,
  ScanLine,
  Sparkles,
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
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[var(--coffee-dark)]/70 to-[var(--coffee-dark)]" />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--coffee-cream)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[var(--coffee-cream)]" />
              <span className="text-xs tracking-[0.3em] text-[var(--warm-beige)] uppercase">
                Digital Experience
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            Scan &
            <span className="block text-[var(--coffee-cream)]">
              Order Instantly
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[var(--warm-beige)]/70 leading-relaxed">
            Experience a seamless luxury ordering experience.
            Explore our handcrafted specialty coffee menu directly
            from your phone with one simple scan.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="max-w-md mx-auto"
        >
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] p-8">

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--coffee-cream)] to-transparent opacity-60" />

              {/* QR CONTAINER */}
              <div className="relative bg-white rounded-3xl p-5 overflow-hidden">

                <img
                  src="/imports/WhatsApp_Image_2026-05-17_at_8.42.11_PM-1.jpeg"
                  alt="Pulse Cafe QR Menu"
                  className="w-full rounded-2xl object-cover"
                />

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-[var(--coffee-cream)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>

              {/* TEXT */}
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <ScanLine className="w-5 h-5 text-[var(--coffee-cream)]" />
                  <span className="text-[var(--warm-beige)] tracking-wide">
                    Scan QR Code
                  </span>
                </div>

                <p className="text-sm text-[var(--warm-beige)]/60 leading-relaxed">
                  Instantly browse our premium coffee selection,
                  desserts, pastries, and signature drinks.
                </p>
              </div>
            </div>
          </motion.a>

          {/* BUTTON */}
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[var(--coffee-cream)] px-8 py-4 text-[var(--coffee-dark)] font-medium shadow-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,165,116,0.4)]"
          >
            <ExternalLink className="w-5 h-5" />
            Open Digital Menu
          </motion.a>

          {/* FOOTER TEXT */}
          <p className="mt-5 text-center text-sm text-[var(--warm-beige)]/40">
            Premium digital ordering experience powered by Pulse
          </p>
        </motion.div>
      </div>
    </section>
  );
}
