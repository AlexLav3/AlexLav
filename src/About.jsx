import React from "react";

const About = () => (
    <section id="about" className="flex flex-col md:flex-row items-center gap-8 px-5 py-12">
        <div
          className="bg-rectangle w-1/2 border-t border-r border-b border-cyan-400 rounded-tl-2xl rounded-bl-2xl p-6"
        >
        <img
          src="https://via.placeholder.com/300x300.png?text=Your+Photo"
          alt="Your avatar"
          className="w-64 h-64 object-cover rounded-full shadow-glow"
        />
        <h3 className="text-2xl font-semibold text-accent mb-2">About Me</h3>
        <p>
        I'm a developer navigating the vast frontier of digital systems — curious, analytical.
        </p>
        </div>
    </section>
); 
export default About;