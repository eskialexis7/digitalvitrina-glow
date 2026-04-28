import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Επικοινωνία & Ανάλυση Αναγκών", desc: "Συζητάμε το όραμά σας και τις απαιτήσεις της επιχείρησής σας." },
  { n: "02", title: "Προκαταβολή 40€", desc: "Δέσμευση θέσης στο πρόγραμμά μας — η θέση σας εξασφαλισμένη." },
  { n: "03", title: "Κατασκευή & Σχεδιασμός", desc: "3 εργάσιμες ημέρες αφιερωμένες στο project σας." },
  { n: "04", title: "Έγκριση & Εξόφληση", desc: "Live site, εκπαίδευση και τελική εξόφληση." },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-glow/80 mb-4">Process</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Απλή & <span className="bg-gradient-to-r from-electric to-cyan-glow bg-clip-text text-transparent">Γρήγορη</span> Διαδικασία
          </h2>
        </Reveal>
      </div>

      <div className="scrollbar-hide overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-6 px-6 md:px-12 pb-6" style={{ width: "max-content" }}>
          {steps.map((s, i) => (
            <div
              key={i}
              className="snap-center w-[85vw] sm:w-[400px] md:w-[420px] shrink-0"
            >
              <div className="glass-strong rounded-3xl p-8 h-full min-h-[320px] flex flex-col justify-between relative overflow-hidden group hover:border-electric/40 transition-all">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-electric/10 blur-3xl group-hover:bg-electric/20 transition-all" />
                <div className="relative">
                  <div className="text-7xl font-bold bg-gradient-to-br from-electric to-cyan-glow bg-clip-text text-transparent mb-6">{s.n}</div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="relative flex items-center gap-2 mt-8 text-xs uppercase tracking-widest text-cyan-glow/70">
                  Βήμα {i + 1} / 4
                </div>
              </div>
            </div>
          ))}
          <div className="w-12 shrink-0" aria-hidden />
        </div>
      </div>

      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/60 mt-6">
        ← Σύρετε για να δείτε όλα τα βήματα →
      </p>
    </section>
  );
}
