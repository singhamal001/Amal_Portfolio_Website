import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { ContactFooter } from './components/ContactFooter';
import { Cursor } from './components/Cursor';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Cursor />
      <Navbar />
      
      <main className="flex-grow relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0e] to-[#131316] -z-10"></div>
          <Skills />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>
      </main>

      <section id="contact">
        <ContactFooter />
      </section>
    </div>
  );
};

export default App;