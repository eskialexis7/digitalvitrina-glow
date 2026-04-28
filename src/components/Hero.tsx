import { motion } from "framer-motion";
import { Aurora } from "./Aurora";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-10 pb-24 overflow-hidden">
      <Aurora />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.72_0.22_235/0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm md:text-base uppercase tracking-[0.25em] text-cyan-glow/80 mb-6"
        >
          Αναβαθμίστε την επαγγελματική σας εικόνα.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
        >
          Η Ψηφιακή Παρουσία που Αξίζει η{" "}
          <span className="bg-gradient-to-r from-electric via-cyan-glow to-electric bg-clip-text text-transparent text-glow">
            Επιχείρησή
          </span>{" "}
          σας.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Παράδοση σε <span className="text-foreground font-medium">3 εργάσιμες ημέρες</span>. Μηδενικές μηνιαίες συνδρομές. Αυτόματο σύστημα κρατήσεων.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 tracking-widest uppercase">
        Scroll ↓
      </div>
    </section>
  );
}
