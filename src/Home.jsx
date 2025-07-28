import React from "react";
import LetterGlitch from './LetterGlitch';

const Home = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center text-center px-12 py-12"
    style={{ height: '200px' }} // Adjust this height as needed
  >
    <div className="absolute inset-0 z-0">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </div>

    <div className="relative z-10">
      <h2 className="text-5xl font-extrabold text-accent">Welcome!</h2>
    </div>
  </section>
);

export default Home;

/*

 <h2 className="text-5xl font-extrabold text-accent">Welcome!</h2>
    <div className="w-32 h-1 mt-4 mb-6 bg-accent shadow-glow animate-pulse"></div>

*/