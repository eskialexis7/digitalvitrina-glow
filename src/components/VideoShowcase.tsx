import { Reveal } from "./Reveal";

export function VideoShowcase() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-glow/80 mb-4">Showcase</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Δείγματα <span className="bg-gradient-to-r from-electric to-cyan-glow bg-clip-text text-transparent">Υψηλής Αισθητικής</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="glass-strong rounded-3xl p-3 md:p-4 relative group">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-electric/30 via-transparent to-cyan-glow/20 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-hidden bg-card">
                  <video
                    src={`https://cdn.coverr.co/videos/coverr-${i === 1 ? 'a-coffee-shop-on-a-rainy-day-1573' : 'wireframes-on-a-laptop-2906'}/1080p.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-cyan-glow/90 pointer-events-none">
                    Project 0{i}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
