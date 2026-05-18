import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { DigitalMenu } from "./components/DigitalMenu";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--coffee-dark)] overflow-x-hidden">
      {loading && <LoadingScreen />}

      <Navbar />

      <main className="relative">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="menu">
          <DigitalMenu />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: var(--coffee-cream) var(--coffee-dark);
        }

        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        *::-webkit-scrollbar-track {
          background: var(--coffee-dark);
        }

        *::-webkit-scrollbar-thumb {
          background: var(--coffee-cream);
          border-radius: 10px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: var(--coffee-light);
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
