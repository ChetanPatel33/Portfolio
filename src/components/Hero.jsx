import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-12 max-w-7xl mx-auto gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <h2 className="text-primary font-medium tracking-wider uppercase text-sm md:text-base animate-fade-in-up">
          Welcome to my portfolio
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Chetan Patel</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Driven software developer focused on building fast, modern, and impactful web applications that solve real problems.
        </p>
        <div className="pt-6 animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <a href="#projects" className="bg-primary hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(170,59,255,0.4)] hover:shadow-[0_0_30px_rgba(170,59,255,0.6)] inline-block hover:-translate-y-1">
            View My Work
          </a>
        </div>
      </div>
      
      <div className="flex-1 relative flex justify-center items-center animate-fade-in-up" style={{animationDelay: '400ms'}}>
        {/* Glow effect behind the image */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full w-full h-full transform scale-75"></div>
        
        {/* Profile Image */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10">
          <img 
            src="/avatar.jpg" 
            alt="Chetan Patel" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
