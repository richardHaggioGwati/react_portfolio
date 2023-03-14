import Hero from '../components/Hero';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="bg-[#1c1e2b] text-gray-200 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
