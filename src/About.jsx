import React from "react";

const About = () => (
    <div className="w-full md:w-1/2 flex justify-center items-center p-6">
    <div className="bg-rectangle w-full border-t border-r border-b border-cyan-400 rounded-tr-2xl rounded-br-2xl p-6 shadow-[inset_0_2px_10px_0_rgba(0,255,255,0.7), inset_10px_0_10px_-5px_rgba(0,255,255,0.7), inset_-10px_0_10px_-5px_rgba(0,255,255,0)]">
    <h3 className="text-2xl font-semibold text-accent mb-2">About Me</h3>
      <img   
          src="images/photo.png"
          className="w-60 h-40 object-cover square-full rounded-tr rounded-tl rounded-bl rounded-br shadow-glow p-1 mt-4 mb-5 "
        /> 
      <p>
        I'm a learner navigating the vast frontier of digital systems, curious, analytical.
        Currently studying at 42Prague while working full-time. 
        Learning C, C++, Unreal Engine, Game Dev, and Digital Forensics. Cybersecurity in future plans as well.
        Lover of coffee, videogames, reading.
      </p>
    </div>
  </div>
); 
export default About;
