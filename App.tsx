import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Internships from '@/components/Internships';
import About from '@/components/About';
import Education from '@/components/Education';
import LearningJourney from '@/components/LearningJourney';
import FutureGoals from '@/components/FutureGoals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certificates />
        <Internships />
        <About />
        <Education />
        <LearningJourney />
        <FutureGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
