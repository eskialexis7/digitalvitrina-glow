import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-electric/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="DigitalVitrina" className="h-10 w-auto" />
          <span className="font-display font-bold text-lg">DigitalVitrina</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DigitalVitrina. Όλα τα δικαιώματα διατηρούνται.</p>
      </div>
    </footer>
  );
}
