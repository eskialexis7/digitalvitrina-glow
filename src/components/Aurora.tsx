export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="aurora-beam" style={{ top: "10%" }} />
      <div className="aurora-beam-2" style={{ top: "30%" }} />
    </div>
  );
}
