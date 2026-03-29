"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, hsl(350 45% 97%) 0%, hsl(340 40% 94%) 40%, hsl(355 35% 96%) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-[-120px] right-[-150px] w-[600px] h-[600px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(340 60% 78%) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-80px] left-[-100px] w-[450px] h-[450px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(340 50% 72%) 0%, transparent 65%)",
        }}
      />

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 left-8 w-2 h-2 rounded-full bg-primary/30 hidden md:block" />
      <div className="absolute top-1/3 right-16 w-1.5 h-1.5 rounded-full bg-primary/20 hidden md:block" />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 rounded-full border border-primary/20 hidden md:block" />
      <div className="absolute top-1/2 right-32 w-2 h-2 rounded-full border border-primary/30 hidden md:block" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles size={12} className="text-primary" />
          <span className="font-inter text-xs tracking-[0.15em] uppercase text-primary">
            Маникюр & Уход за ногтями
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-6 leading-[1.1]"
        >
          Твои ногти —<br />
          <span className="italic text-primary relative">
            твой стиль
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q50 0 100 4 Q150 8 200 3"
                stroke="hsl(340 45% 68%)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-base text-muted-foreground mb-10 leading-relaxed max-w-sm mx-auto"
        >
          Профессиональный маникюр в уютной атмосфере. Каждая деталь — с любовью
          и вниманием к тебе.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={scrollToBooking}
            className="bg-primary text-primary-foreground font-inter text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Записаться на сеанс
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-inter text-sm text-foreground/70 border border-border/60 px-8 py-3.5 rounded-full hover:bg-white/60 hover:border-primary/30 transition-all backdrop-blur-sm"
          >
            Смотреть услуги
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-0"
        >
          {[
            { value: "200+", label: "клиентов" },
            { value: "3 года", label: "опыта" },
            { value: "6", label: "услуг" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-8 ${i < 2 ? "border-r border-primary/15" : ""}`}
            >
              <p className="font-cormorant text-3xl font-light text-foreground">
                {stat.value}
              </p>
              <p className="font-inter text-xs text-muted-foreground mt-0.5 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {["A", "M", "K"].map((letter, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center"
              >
                <span className="font-inter text-xs text-primary font-medium">
                  {letter}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="hsl(340 45% 68%)"
              >
                <polygon points="5,1 6.2,3.8 9,4.2 7,6.2 7.6,9 5,7.6 2.4,9 3,6.2 1,4.2 3.8,3.8" />
              </svg>
            ))}
            <span className="font-inter text-xs text-muted-foreground ml-1.5">
              5.0 · 87 отзывов
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

