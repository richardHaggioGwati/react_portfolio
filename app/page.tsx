import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="bg-[#1c1e2b] text-gray-200 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
