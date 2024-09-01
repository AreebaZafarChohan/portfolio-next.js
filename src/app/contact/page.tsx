import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ContactSection from "../components/contact-section/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className="container mt-24 mx-auto px-4 py-4 mb-28">
        < ContactSection />
    </div>
    <Footer />
    </main>
  );
}
