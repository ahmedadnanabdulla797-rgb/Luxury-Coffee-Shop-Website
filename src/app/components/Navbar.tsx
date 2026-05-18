import { motion, useScroll, useTransform } from "motion/react";
import { Coffee, Menu, X, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 9, 8, 0)", "rgba(10, 9, 8, 0.9)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Menu", "Gallery", "Reviews", "Contact"];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <Coffee className="w-8 h-8 text-[var(--coffee-cream)] group-hover:rotate-12 transition-transform duration-300" />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-[var(--coffee-cream)] rounded-full blur-lg opacity-30"
              />
            </div>
            <div>
              <h1 className="tracking-[0.2em] text-[var(--coffee-cream)]">
                PULSE
              </h1>
              <p className="text-[10px] text-[var(--warm-beige)] opacity-60 tracking-wider">
                SPECIALTY COFFEE
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-[var(--warm-beige)] hover:text-[var(--coffee-cream)] transition-colors duration-300 relative group cursor-pointer"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--coffee-cream)] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full hover:shadow-lg hover:shadow-[var(--coffee-cream)]/20 transition-all duration-300"
            >
              Order Online
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2"
            >
              <ShoppingCart className="w-6 h-6 text-[var(--coffee-cream)]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full flex items-center justify-center text-xs">
                0
              </span>
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[var(--coffee-cream)] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden backdrop-blur-xl bg-[var(--coffee-dark)]/95"
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-[var(--warm-beige)] hover:text-[var(--coffee-cream)] transition-colors py-2 cursor-pointer"
            >
              {item}
            </a>
          ))}
          <a
            href="https://app.qlub.io/qr/ae/pulse-cafe-muwaileh/9b31068a-78da-42a5-a75b-e1ed84333d73/*/*/820750dcb9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full text-center"
          >
            Order Online
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
