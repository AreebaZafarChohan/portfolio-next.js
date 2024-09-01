import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Project from "../components/project-component/Project";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 mb-28">
      <Project />
    </div>
      <Footer />
    </main>
  );
}
