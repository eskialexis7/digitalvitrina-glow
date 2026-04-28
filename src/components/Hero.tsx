import { motion } from "framer-motion";
import { Aurora } from "./Aurora";
import logo from "@/assets/logo.png";

const words = ["Η", "Ψηφιακή", "Παρουσία", "που", "Αξίζει", "η", "Επιχείρησή", "σας."];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-10 pb-24 overflow-hidden">
      <Aurora />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.22_235/0.15),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-12"
      >
        <img
          src={logo}
          alt="DigitalVitrina"
          className="h-20 md:h-24 w-auto"
          style={{ filter: "drop-shadow(0 0 25px oklch(0.72 0.22 235 / 0.6))" }}
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base uppercase tracking-[0.25em] text-cyan-glow/80 mb-6"
        >
          Αναβαθμίστε την επαγγελματική σας εικόνα.
        </motion.p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {i === 6 ? (
                <span className="bg-gradient-to-r from-electric via-cyan-glow to-electric bg-clip-text text-transparent text-glow">
                  {w}
                </span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Παράδοση σε <span className="text-foreground font-medium">3 εργάσιμες ημέρες</span>. Μηδενικές μηνιαίες συνδρομές. Αυτόματο σύστημα κρατήσεων.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-electric text-primary-foreground font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{ boxShadow: "0 0 30px oklch(0.72 0.22 235 / 0.5)" }}
          >
            <span className="absolute inset-0 rounded-full bg-electric blur-xl opacity-50 group-hover:opacity-90 transition-opacity" />
            <span className="relative">Ξεκινήστε το Project Σας</span>
          </a>
          <a
            href="#pricing"
            className="glass inline-flex items-center justify-center px-8 py-4 rounded-full font-medium hover:border-electric/40 transition-all"
          >
            Δείτε την Προσφορά
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 tracking-widest uppercase"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
