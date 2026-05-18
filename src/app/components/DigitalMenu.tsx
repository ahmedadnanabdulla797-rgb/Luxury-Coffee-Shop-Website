import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Smartphone, ScanLine } from "lucide-react";

export function DigitalMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const menuUrl =
    "https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9";

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 bg-[var(--coffee-dark)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block">
            DIGITAL MENU
          </span>

          <h2 className="text-4xl md:text-5xl text-[var(--warm-beige)] mb-4">
            Scan & <span className="text-[var(--coffee-cream)]">Order</span>
          </h2>

          <p className="text-[var(--warm-beige)]/70 max-w-xl mx-auto">
            Scan the QR code or tap below to instantly explore our full menu and order without waiting.
          </p>
        </motion.div>

        {/* QR CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-sm mx-auto"
        >
          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -10 }}
            className="block group"
          >
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border-2 border-[var(--glass-border)] rounded-3xl p-6 hover:border-[var(--coffee-cream)]/60 transition-all duration-500 shadow-2xl">

              {/* QR IMAGE */}
              <div className="relative bg-white rounded-2xl p-4 mb-5 overflow-hidden">

                <img
                  src="/imports/WhatsApp_Image_2026-05-17_at_8.42.11_PM-1.jpeg"
                  alt="Pulse Cafe QR Menu"
                  className="w-full h-auto rounded-xl"
                />

                {/* Glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-2 bg-[var(--coffee-cream)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40"
                />
              </div>

              {/* TEXT */}
              <div className="flex items-center justify-center gap-2 text-[var(--warm-beige)]">
                <ScanLine className="w-5 h-5 text-[var(--coffee-cream)]" />
                <p className="text-sm">Scan or Tap to Open Menu</p>
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
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(212, 165, 116, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full px-8 py-3 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full flex items-center justify-center gap-2 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Open Digital Menu
          </motion.a>

          {/* FALLBACK LINK */}
          <p className="mt-4 text-xs text-[var(--warm-beige)]/50">
            If QR doesn’t scan, use the button above
          </p>
        </motion.div>
      </div>
    </section>
  );
}
