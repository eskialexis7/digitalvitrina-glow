import { useState, useMemo } from "react";
import { Reveal } from "./Reveal";

const businessTypes = [
  "Κουρεία & Κομμωτήρια",
  "Nail Studios",
  "Τεχνικά Έργα",
  "Υδραυλικοί",
  "Γυμναστήρια",
  "Λογιστικά",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState(businessTypes[0]);
  const [description, setDescription] = useState("");

  const message = useMemo(
    () =>
      `Καλησπέρα, είμαι ο/η ${name || "[Όνομα]"}. Ενδιαφέρομαι για την κατασκευή site για την επιχείρησή μου (${business}). Το τηλέφωνό μου είναι ${phone || "[Τηλέφωνο]"}. ${description || ""}`.trim(),
    [name, phone, business, description]
  );

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/306984375186?text=${encoded}`;
  const smsUrl = `sms:+306984375186?body=${encoded}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-beam" style={{ top: "20%" }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-glow/80 mb-4">Project Starter</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ας <span className="bg-gradient-to-r from-electric to-cyan-glow bg-clip-text text-transparent">ξεκινήσουμε</span>.
          </h2>
          <p className="text-muted-foreground">Συμπληρώστε τη φόρμα και επικοινωνήστε άμεσα μαζί μας.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-6 md:p-10 relative">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Ονοματεπώνυμο">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 80))}
                  placeholder="π.χ. Γιώργος Παπαδόπουλος"
                  className="input-base"
                />
              </Field>
              <Field label="Τηλέφωνο">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.slice(0, 20))}
                  placeholder="69XXXXXXXX"
                  className="input-base"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Είδος Επιχείρησης">
                <select
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="input-base appearance-none cursor-pointer"
                >
                  {businessTypes.map((b) => (
                    <option key={b} value={b} className="bg-card">{b}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Περιγραφή">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
                  placeholder="Περιγράψτε με λίγα λόγια τι χρειάζεστε..."
                  rows={4}
                  className="input-base resize-none"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-electric text-primary-foreground font-semibold transition-all hover:scale-[1.02]"
                style={{ boxShadow: "0 0 30px oklch(0.72 0.22 235 / 0.5)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.88 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.84.98h.01a7.94 7.94 0 0 0 5.55-13.56zM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09zm3.62-4.94c-.2-.1-1.17-.58-1.36-.64-.18-.07-.31-.1-.45.1s-.51.64-.63.78c-.12.13-.23.15-.43.05a5.42 5.42 0 0 1-2.7-2.36c-.2-.34.2-.32.58-1.06a.36.36 0 0 0-.02-.34c-.05-.1-.45-1.08-.61-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 0 0-.54.25 2.26 2.26 0 0 0-.7 1.68 3.93 3.93 0 0 0 .82 2.08c.1.13 1.42 2.17 3.45 3.04 1.96.85 1.96.57 2.32.53.36-.03 1.17-.48 1.34-.94.16-.46.16-.85.11-.94-.05-.08-.18-.13-.38-.23z"/></svg>
                WhatsApp
              </a>
              <a
                href={smsUrl}
                className="glass inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium hover:border-electric/50 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                SMS
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-electric/10 text-center">
              <p className="text-sm text-muted-foreground mb-2">Ή καλέστε μας απευθείας:</p>
              <a
                href="tel:+306984375186"
                className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold bg-gradient-to-r from-electric to-cyan-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                +30 698 437 5186
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          padding: 0.85rem 1rem;
          background: oklch(0.1 0.02 250 / 0.6);
          border: 1px solid oklch(0.72 0.22 235 / 0.18);
          border-radius: 0.85rem;
          color: var(--foreground);
          font-size: 0.95rem;
          transition: all 0.2s;
          outline: none;
        }
        .input-base::placeholder { color: oklch(0.5 0.02 250); }
        .input-base:focus {
          border-color: oklch(0.72 0.22 235 / 0.6);
          box-shadow: 0 0 0 4px oklch(0.72 0.22 235 / 0.12);
          background: oklch(0.12 0.02 250 / 0.8);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-cyan-glow/80 mb-2">{label}</span>
      {children}
    </label>
  );
}
