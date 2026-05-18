import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Smartphone } from "lucide-react";

export function DigitalMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const menuUrl = "https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9";

  return (
    <section ref={ref} className="py-20 bg-[var(--coffee-dark)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block">
            DIGITAL MENU
          </span>
          <h2 className="text-4xl md:text-5xl text-[var(--warm-beige)] mb-4">
            Scan & <span className="text-[var(--coffee-cream)]">Order</span>
          </h2>
          <p className="text-[var(--warm-beige)]/70 max-w-xl mx-auto">
            Scan the QR code to explore our menu and pay your bill instantly
          </p>
        </motion.div>

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
            whileHover={{ scale: 1.05, y: -8 }}
            className="block group"
          >
            <div className="bg-[var(--glass-bg)] backdrop-blur-xl border-2 border-[var(--glass-border)] rounded-3xl p-6 hover:border-[var(--coffee-cream)]/50 transition-all duration-500 shadow-2xl hover:shadow-[var(--coffee-cream)]/20">
              <div className="relative bg-white rounded-2xl p-4 mb-4">
                <img
                  src="/imports/WhatsApp_Image_2026-05-17_at_8.42.11_PM-1.jpeg"
                  alt="Pulse Cafe Menu QR Code"
                  className="w-full h-auto rounded-xl"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -inset-2 bg-[var(--coffee-cream)] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 -z-10"
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-[var(--warm-beige)]">
                <Smartphone className="w-5 h-5 text-[var(--coffee-cream)]" />
                <p>Tap to View Menu</p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full px-8 py-3 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            View Digital Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
