import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between md:px-12 py-6 px-12 bg-transparent text-white ml-4">
      <div className="text-2xl font-bold text-green-400">ROHIT SINGH</div>
      <nav className="space-x-6 text-sm md:text-base font-medium">
        <a href="#about" className="hover:text-pink-400">ABOUT</a>
        <a href="#projects" className="hover:text-pink-400">PROJECTS</a>
        <a href="#skills" className="hover:text-pink-400">SKILLS</a>
        <a href="#education" className="hover:text-pink-400">EDUCATION</a>
      </nav>
    </header>
  );
}
