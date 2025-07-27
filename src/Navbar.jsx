import React from "react";

const Navbar = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-box shadow-glow sticky top-0 z-50">
    <h1 className="text-accent text-2xl font-bold tracking-wide">AlexLav</h1>
    <nav className="flex space-x-6">
      <a href="#home" className="hover:text-accent transition">Home</a>
      <a href="#about" className="hover:text-accent transition">About Me</a>
      <a href="#contact" className="hover:text-accent transition">Contact</a>
    </nav>
  </header>
);

export default Navbar;