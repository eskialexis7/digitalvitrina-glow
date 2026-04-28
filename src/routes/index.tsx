import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DigitalVitrina — Premium Web Design Agency" },
      { name: "description", content: "Επαγγελματικά websites σε 3 ημέρες. Εφάπαξ 340€. Αυτόματα ραντεβού, SEO ready, mobile-first." },
      { property: "og:title", content: "DigitalVitrina — Η Ψηφιακή Παρουσία που Αξίζει η Επιχείρησή σας" },
      { property: "og:description", content: "Παράδοση σε 3 εργάσιμες ημέρες. Μηδενικές μηνιαίες συνδρομές." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <Hero />
      <VideoShowcase />
      <Pricing />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
}
