import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Clock, Users, Award } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Star, value: "4.3★", label: "Google Rating" },
    { icon: Users, value: "160+", label: "Reviews" },
    { icon: Clock, value: "Until 2 AM", label: "Open Daily" },
    { icon: Award, value: "Premium", label: "Quality Coffee" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-[var(--coffee-dark)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Warm Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--coffee-cream)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Behind Image */}
            <div className="absolute -inset-5 bg-[var(--coffee-cream)]/10 blur-3xl rounded-[40px]" />

            <motion.div
              className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/imports/ChatGPT Image May 18, 2026, 05_06_37 PM.png"
                alt="Pulse Cafe Interior"
                className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--coffee-dark)] via-black/10 to-transparent" />

              {/* Warm Light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,165,116,0.25),transparent_40%)]" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
              >
                <p className="text-[var(--coffee-cream)] text-sm tracking-[0.25em] mb-1">
                  PULSE EXPERIENCE
                </p>

                <h3 className="text-[var(--warm-beige)] text-xl">
                  Luxury Coffee & Cozy Atmosphere
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-[var(--coffee-cream)] tracking-[0.3em] text-sm mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              OUR STORY
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[var(--warm-beige)] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Where Passion Meets
              <span className="block text-[var(--coffee-cream)]">
                Perfection
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-[var(--warm-beige)]/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              At Pulse Speciality Coffee, we believe every cup tells a story.
              Located in the vibrant heart of Sharjah at Muwaileh Commercial -
              Al Zahia, we craft exceptional coffee experiences that awaken
              your senses and elevate your day.
            </motion.p>

            <motion.p
              className="text-lg text-[var(--warm-beige)]/70 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              From meticulously sourced beans to expertly trained baristas,
              every detail is designed to deliver an unforgettable coffee
              journey. Open until 2 AM, we're here for your morning ritual,
              afternoon escape, and late-night indulgence.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="relative group"
                >
                  <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[var(--coffee-cream)]/40 transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)]">
                    <stat.icon className="w-8 h-8 text-[var(--coffee-cream)] mb-3 group-hover:scale-110 transition-transform" />

                    <div className="text-2xl text-[var(--warm-beige)] mb-1">
                      {stat.value}
                    </div>

                    <div className="text-sm text-[var(--warm-beige)]/60">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
