import HeroSection from "./components/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="container mt-24 mx-auto px-12 py-4 mb-28">
    <HeroSection />
    </div>
    </main>
  );
}
