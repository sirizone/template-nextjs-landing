import cfgRaw from "../../sirizone.config.json";
import Analytics from "../modules/analytics/Analytics";
import Blog from "../modules/blog/BlogPreview";

const cfg: any = cfgRaw;
const enabled = (m: string) => (cfg.modules_enabled || []).includes(m);

export default function Page() {
  const sections = cfg.content?.sections || ["hero", "features", "pricing", "cta", "footer"];
  return (
    <main className="min-h-screen">
      {sections.includes("hero") && <Hero />}
      {sections.includes("features") && <Features />}
      {sections.includes("pricing") && <Pricing />}
      {sections.includes("cta") && <CTA />}
      {enabled("blog") && <Blog />}
      {sections.includes("footer") && <Footer />}
      {enabled("analytics") && <Analytics />}
    </main>
  );
}

function Hero() {
  return (
    <section className="px-6 py-32 text-center bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <h1 className="text-6xl font-bold mb-4">{cfg.name}</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">{cfg.tagline}</p>
      <button className="px-8 py-3 rounded-full font-semibold" style={{ background: cfg.primary_color }}>
        {cfg.content?.hero_cta || "Get Started"}
      </button>
    </section>
  );
}

function Features() {
  const items = cfg.content?.features || [
    { title: "Fast", desc: "Lightning quick." },
    { title: "Secure", desc: "Built-in safety." },
    { title: "Scalable", desc: "Grows with you." },
  ];
  return (
    <section className="px-6 py-24 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((f: any, i: number) => (
          <div key={i} className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2" style={{ color: cfg.primary_color }}>{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = cfg.content?.pricing || [
    { name: "Starter", price: "$0", features: ["Basic features"] },
    { name: "Pro", price: "$29", features: ["Everything in Starter", "Priority support"] },
  ];
  return (
    <section className="px-6 py-24 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {tiers.map((t: any, i: number) => (
          <div key={i} className="p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">{t.name}</h3>
            <div className="text-4xl font-bold my-4" style={{ color: cfg.primary_color }}>{t.price}</div>
            <ul className="space-y-2">{t.features.map((f: string, j: number) => <li key={j} className="text-gray-400">✓ {f}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-24 text-center" style={{ background: cfg.primary_color }}>
      <h2 className="text-4xl font-bold mb-4">{cfg.content?.cta_title || "Ready to start?"}</h2>
      <button className="px-8 py-3 rounded-full font-semibold bg-black text-white">
        {cfg.content?.cta_button || "Sign up free"}
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 bg-gray-950 text-center text-gray-500">
      © {new Date().getFullYear()} {cfg.name}. Built with Sirizone AI.
    </footer>
  );
}
