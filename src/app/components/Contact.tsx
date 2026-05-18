import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Muwaileh Commercial", "Al Zahia, Sharjah", "United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["06 527 7883", "WhatsApp Available"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Open Daily", "Until 2:00 AM", "Late Night Service"],
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-[var(--coffee-dark)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--coffee-cream)] rounded-full blur-[200px] opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--coffee-medium)] rounded-full blur-[200px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--warm-beige)] mb-6">
            Visit <span className="text-[var(--coffee-cream)]">Our Café</span>
          </h2>
          <p className="text-lg text-[var(--warm-beige)]/70 max-w-2xl mx-auto">
            Experience the finest specialty coffee in Sharjah
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl p-6 hover:border-[var(--coffee-cream)]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--coffee-cream)] rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[var(--coffee-dark)]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[var(--warm-beige)] mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[var(--warm-beige)]/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[var(--coffee-cream)] to-[var(--coffee-light)] rounded-2xl p-8"
            >
              <h3 className="text-2xl text-[var(--coffee-dark)] mb-4">
                Follow Us
              </h3>
              <p className="text-[var(--coffee-dark)]/70 mb-6">
                Stay updated with our latest offerings and events
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-[var(--coffee-dark)] rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <Instagram className="w-6 h-6 text-[var(--coffee-cream)]" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-[var(--coffee-dark)] rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <Facebook className="w-6 h-6 text-[var(--coffee-cream)]" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-[var(--coffee-dark)] rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <Mail className="w-6 h-6 text-[var(--coffee-cream)]" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6964847!2d55.5!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA1NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-[var(--coffee-cream)]/10 pointer-events-none" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-[var(--coffee-cream)] text-[var(--coffee-dark)] rounded-full text-lg hover:shadow-2xl transition-all duration-300"
          >
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
