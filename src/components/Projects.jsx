import React from 'react';

const projects = [
  {
    title: 'ATM Machine System',
    description: 'A comprehensive ATM machine simulation system built to handle withdrawals, deposits, and account management securely.',
    tags: ['Java'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Bank System',
    description: 'A robust banking management system for tracking user accounts, transactions, and banking operations.',
    tags: ['Java', 'SQL'],
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Image Gallery',
    description: 'A beautiful, responsive image gallery showcasing pictures with modern grid layouts and smooth viewing experiences.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic Tic Tac Toe game with an interactive UI, built to demonstrate core logic and state management.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    color: 'from-orange-500 to-yellow-400'
  },
  {
    title: 'Stone Paper Scissor',
    description: 'A fun, interactive rock-paper-scissors game against a computer opponent with score tracking.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    color: 'from-red-500 to-rose-400'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was an opportunity to learn something new and solve interesting problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-card group overflow-hidden flex flex-col h-full hover-glow">
            {/* Project Image Placeholder / Header */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 font-bold text-xl tracking-widest uppercase">
                {project.title.split(' ')[0]}
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
