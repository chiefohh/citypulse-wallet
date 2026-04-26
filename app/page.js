import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import DemoSimulator from "@/components/DemoSimulator";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 2rem", borderBottom: "1px solid #1e293b" }}>
        <a href="/merchant" style={{ color: "#60a5fa", fontSize: "0.875rem", textDecoration: "none" }}>
          Merchant Dashboard →
        </a>
      </div>
      <HeroSection />
      <FeatureCards />
      <DemoSimulator />
      <footer style={{ textAlign: "center", padding: "2rem", color: "#475569", fontSize: "0.875rem", borderTop: "1px solid #1e293b" }}>
        © 2025 CityPulse Wallet · Built for DSV Gruppe Hackathon
      </footer>
    </main>
  );
}