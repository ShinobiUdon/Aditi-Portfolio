import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="bg-charcoal text-ash-gray py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Aditi Narania. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;