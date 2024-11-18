import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-ash-gray/10 to-white">
      <div className="section-container text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 animate-fade-in">
          Aditi Narania
        </h1>
        <p className="text-xl md:text-2xl text-dark-slate-gray mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Senior Marketing Executive
        </p>
        <p className="text-lg text-hookers-green max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Driving growth through strategic marketing initiatives and innovative digital campaigns.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-cambridge-blue hover:text-hookers-green transition-colors animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          View My Work
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;