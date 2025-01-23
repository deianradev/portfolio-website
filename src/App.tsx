import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-primary-900 text-gray-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <div className="h-32"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;