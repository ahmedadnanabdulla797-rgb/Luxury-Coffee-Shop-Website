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
      className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0b0806] via-[#120d0a] to-[#1a140f]"
    >
      {/* Ambient Lights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4a574]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8b5e34]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[var(--coffee-cream)]/20 blur-3xl rounded-full" />

            {/* IMAGE WRAPPER */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[48px] border border-white/10 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.8)] group"
            >
              {/* Premium Label */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-[rgba(15,10,8,0.75)] backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--coffee-cream)]/80">
                    Pulse Specialty Coffee
                  </p>
                </div>
              </div>

              {/* IMAGE FIX (NO CROPPING + NO EMPTY SPACE ISSUE) */}
              <div className="relative w-full h-[780px] overflow-hidden flex items-center justify-center">
                
                <img
                  src="/imports/ChatGPT Image May 18, 2026, 05_06_37 PM.png"
                  alt="Pulse Cafe Interior"
                  className="max-w-full max-h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Cinematic background fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#120d0a] via-[#1b140f] to-[#0f0b08]" />

                {/* Premium glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.18),transparent_60%)]" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%]">
              <div className="bg-[rgba(15,10,8,0.72)] backdrop-blur-2xl border border-white/10 rounded-[28px] px-8 py-7">
                <h3 className="text-[28px] text-[var(--warm-beige)]">
                  Crafted Coffee.
                  <span className="block text-[var(--coffee-cream)]">
                    Designed Atmosphere.
                  </span>
                </h3>
              </div>
            </div>

          </motion.div>

          {/* TEXT SIDE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl text-[var(--warm-beige)] mb-8">
              More Than <span className="text-[var(--coffee-cream)]">Coffee</span>
            </h2>

            <p className="text-lg text-[var(--warm-beige)]/70 mb-6">
              Premium coffee experience with luxury atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-3xl border border-white/10 bg-white/5"
                >
                  <stat.icon className="w-8 h-8 text-[var(--coffee-cream)] mb-3" />
                  <div className="text-2xl text-[var(--warm-beige)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--warm-beige)]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
