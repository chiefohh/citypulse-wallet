import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <FeatureCards />
      <section id="demo" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center text-slate-400">
          <p className="text-lg">🚧 Demo simulator coming in Phase 3</p>
        </div>
      </section>
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        © 2025 CityPulse Wallet · Built for DSV Gruppe Hackathon
      </footer>
    </main>
  );
}