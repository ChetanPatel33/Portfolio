import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-primary/30">
      {/* Abstract background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <header className="py-6 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-slate-900/50 sticky top-0 z-50 border-b border-slate-800/50">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            CP.
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
          </nav>
          <a href="#projects" className="md:hidden text-sm font-medium text-primary hover:text-white transition-colors">Work</a>
        </header>

        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
