import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Timings from './components/Timings';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Trainers />
      <Transformations />
      <Timings />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
