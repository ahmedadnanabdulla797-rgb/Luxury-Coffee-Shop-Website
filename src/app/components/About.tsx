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

  const hours = [
    { day: "Monday", time: "7:00 AM – 1:00 AM" },
    { day: "Tuesday", time: "7:00 AM – 1:00 AM" },
    { day: "Wednesday", time: "7:00 AM – 1:00 AM" },
    { day: "Thursday", time: "7:00 AM – 1:00 AM" },
    { day: "Friday", time: "8:00 AM – 2:00 AM" },
    { day: "Saturday", time: "8:00 AM – 2:00 AM" },
    { day: "Sunday", time: "8:00 AM – 2:00 AM" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-[#0b0806] via-[#120d0a] to-[#1a140f]"
    >
      {/* Premium Ambient Lights */}
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
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[var(--coffee-cream)]/20 blur-3xl rounded-full" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.7)] group"
            >
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-[rgba(15,10,8,0.75)] backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--coffee-cream)]/80">
                    Pulse Specialty Coffee
                  </p>
                </div>
              </div>

              <img
                src="/imports/ChatGPT Image May 18, 2026, 05_06_37 PM.png"
                alt="Pulse Cafe Interior"
                className="w-full h-[780px] object-contain scale-[0.88] group-hover:scale-95 transition-all duration-700 bg-gradient-to-br from-[#120d08] via-[#1b140f] to-[#0f0b08]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h2 className="text-6xl text-[var(--warm-beige)] mb-8">
              More Than <span className="text-[var(--coffee-cream)]">Coffee</span>
            </h2>

            <p className="text-lg text-[var(--warm-beige)]/70 mb-8">
              Premium coffee experience with luxury atmosphere.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-12">
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

            {/* PREMIUM OPENING HOURS (NEW ADDITION) */}
            <div className="mt-6">
              <h3 className="text-[14px] tracking-[0.3em] uppercase text-[var(--coffee-cream)] mb-4">
                Opening Hours
              </h3>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl p-5 space-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

                {/* glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,116,0.12),transparent_60%)]" />

                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-[13px] border-b border-white/5 pb-2 last:border-b-0"
                  >
                    <span className="text-[var(--warm-beige)]/70">
                      {item.day}
                    </span>
                    <span className="text-[var(--coffee-cream)]">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
