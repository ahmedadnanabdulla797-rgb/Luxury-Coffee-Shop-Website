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
      className="py-32 bg-[var(--coffee-dark)] relative overflow-hidden"
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

      {/* Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--coffee-cream)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[var(--coffee-cream)]/20 blur-3xl rounded-full" />

            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
            >
              <img
                src="/imports/ChatGPT Image May 18, 2026, 05_06_37 PM.png"
                alt="Pulse Cafe Interior"
                className="w-full h-[720px] object-cover"
              />

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Warm Light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,165,116,0.35),transparent_40%)]" />
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-[rgba(20,15,10,0.75)] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 max-w-sm shadow-2xl"
            >
              <p className="text-[var(--coffee-cream)] tracking-[0.25em] text-xs mb-3">
                SPECIALTY EXPERIENCE
              </p>

              <h3 className="text-2xl text-[var(--warm-beige)] mb-3 leading-snug">
                Crafted Coffee,
                Designed Atmosphere
              </h3>

              <p className="text-[var(--warm-beige)]/60 text-sm leading-relaxed">
                Premium coffee moments with warm interiors, luxury ambiance,
                and handcrafted perfection in every detail.
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <motion.span
              className="text-[var(--coffee-cream)] tracking-[0.35em] text-sm mb-6 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
            >
              ABOUT PULSE
            </motion.span>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl text-[var(--warm-beige)] mb-8 leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              More Than
              <span className="block text-[var(--coffee-cream)]">
                Just Coffee
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-[var(--warm-beige)]/70 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Pulse Speciality Coffee blends exceptional coffee craftsmanship
              with a modern luxury atmosphere designed for meaningful moments.
            </motion.p>

            <motion.p
              className="text-lg text-[var(--warm-beige)]/60 leading-relaxed mb-14"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              From signature espresso creations to warm late-night vibes,
              every corner of Pulse is designed to feel premium, relaxing,
              and unforgettable.
            </motion.p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group"
                >
                  <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[var(--coffee-cream)]/40 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 shadow-xl">
                    <stat.icon className="w-8 h-8 text-[var(--coffee-cream)] mb-4 group-hover:scale-110 transition-transform duration-300" />

                    <div className="text-3xl text-[var(--warm-beige)] mb-2">
                      {stat.value}
                    </div>

                    <div className="text-sm text-[var(--warm-beige)]/60 tracking-wide">
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
