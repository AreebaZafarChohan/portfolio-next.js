import Image from "next/image";
import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4 mb-28">
    <HeroSection />
    </div>
    <Footer />
    </main>
  );
}
