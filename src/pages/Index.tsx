import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />

        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
