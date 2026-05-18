import { motion } from "motion/react";
import { Coffee, Instagram, Facebook, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--coffee-dark)] border-t border-[var(--glass-border)] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--coffee-cream)] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-10 h-10 text-[var(--coffee-cream)]" />
              <div>
                <h3 className="text-2xl tracking-[0.2em] text-[var(--coffee-cream)]">
                  PULSE
                </h3>
                <p className="text-xs text-[var(--warm-beige)] opacity-60 tracking-wider">
                  SPECIALTY COFFEE
                </p>
              </div>
            </div>
            <p className="text-[var(--warm-beige)]/70 mb-6 max-w-md leading-relaxed">
              Crafting exceptional coffee experiences in the heart of Sharjah. Every cup is a celebration of quality, passion, and community.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-full flex items-center justify-center hover:border-[var(--coffee-cream)]/40 transition-all"
              >
                <Instagram className="w-5 h-5 text-[var(--coffee-cream)]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-full flex items-center justify-center hover:border-[var(--coffee-cream)]/40 transition-all"
              >
                <Facebook className="w-5 h-5 text-[var(--coffee-cream)]" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-full flex items-center justify-center hover:border-[var(--coffee-cream)]/40 transition-all"
              >
                <Mail className="w-5 h-5 text-[var(--coffee-cream)]" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--coffee-cream)] mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About Us", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-[var(--warm-beige)]/70 hover:text-[var(--coffee-cream)] transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--coffee-cream)] mb-4 tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-[var(--warm-beige)]/70">
              <li>Muwaileh Commercial</li>
              <li>Al Zahia, Sharjah</li>
              <li className="pt-2">06 527 7883</li>
              <li>Open Until 2 AM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--glass-border)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--warm-beige)]/60 text-sm text-center md:text-left">
              © 2026 Pulse Speciality Coffee. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-[var(--warm-beige)]/60 text-sm">
              <span>Crafted with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-[var(--coffee-cream)] fill-[var(--coffee-cream)]" />
              </motion.div>
              <span>in Sharjah</span>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[var(--warm-beige)]/60 hover:text-[var(--coffee-cream)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--warm-beige)]/60 hover:text-[var(--coffee-cream)] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--coffee-cream)] to-transparent opacity-20" />
    </footer>
  );
}
