import { Reveal } from "./Reveal";

const features = [
  "Αυτόματα ραντεβού (Google Calendar / Cal.com)",
  "Custom Domain",
  "SEO Ready",
  "Mobile-first σχεδιασμός",
  "Σελίδα Πολιτικής Απορρήτου",
  "Παράδοση σε 3 εργάσιμες ημέρες",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.22_235/0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-glow/80 mb-4">Προσφορά</p>
          <h2 className="text-4xl md:text-5xl font-bold">Μία τιμή. Όλα μέσα.</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-electric via-cyan-glow to-electric opacity-40 group-hover:opacity-70 blur-2xl transition-opacity" />
            <div className="glass-strong relative rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-cyan-glow">Best Value</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">ΟΛΟΚΛΗΡΩΜΕΝΟ SITE</h3>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-electric to-cyan-glow bg-clip-text text-transparent">340€</span>
                <span className="text-muted-foreground">/ Εφάπαξ χρέωση</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Καμία μηνιαία συνδρομή. Ποτέ.</p>

              <div className="h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent mb-8" />

              <ul className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric/15 border border-electric/40">
                      <svg className="h-3 w-3 text-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full text-center px-8 py-4 rounded-full bg-electric text-primary-foreground font-semibold transition-all hover:scale-[1.02]"
                style={{ boxShadow: "0 0 30px oklch(0.72 0.22 235 / 0.5)" }}
              >
                Κλείστε τη Θέση σας
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
