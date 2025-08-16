import React from "react";
import LanguageModal from "./LanguageModal";
import ProjectModal from "./ProjectModal";

const Explore = ({ onProjectSelect, onLanguageSelect }) => (
  <div className="w-full md:w-1/2 flex justify-center items-center p-6">
    <div className="bg-rectangle w-full border-t border-l border-b border-cyan-400 rounded-tl-2xl rounded-bl-2xl p-6 relative overflow-hidden">
      <h3 className="text-2xl md:text-s md:font-italic font-semibold text-accent mb-2">Explore Projects</h3>
      <p className="mb-4">Dive into my portfolio. Not all projects ever did included.</p>

      {/* Background image with fade effect */}
      <div className="relative w-full h-60">
        <img
          src="/images/image2.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rectangle to-transparent z-10" />
        
        {/* Language selection overlayed on top of image */}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <div className="backdrop-blur-sm bg-black/30 p-4 rounded-xl flex gap-6">
            <CLanguage onSelect={onLanguageSelect} />
            <CppLanguage onSelect={onLanguageSelect} />
            <Unreal onSelect={onLanguageSelect} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CLanguage = ({ onSelect }) => {
  return (
    <div
      onClick={() => onSelect('C')}
      className="relative group w-[100px] h-[100px] flex items-center justify-center cursor-pointer hover:scale-105 transition"
    >
      <div className="z-10 rounded-full border-4 border-cyan-400 text-cyan-500 flex items-center justify-center w-full h-full text-[40px] font-mono">
        C
      </div>
      <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-30 group-hover:scale-[1.2] transition duration-500 ease-out pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-20 group-hover:scale-[1.4] transition duration-700 ease-out delay-100 pointer-events-none"></div>
    </div>
  );
};

const CppLanguage = ({ onSelect }) => {
  return (
    <div
      onClick={() => onSelect('Cpp')}
      className="relative group w-[100px] h-[100px] flex items-center justify-center cursor-pointer hover:scale-105 transition"
    >
      <div className="z-10 rounded-full border-4 border-cyan-400 text-cyan-500 flex items-center justify-center w-full h-full text-[40px] font-mono">
        C++
      </div>
      {/* outer rings */}
      <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-30 group-hover:scale-[1.2] transition duration-500 ease-out pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-20 group-hover:scale-[1.4] transition duration-700 ease-out delay-100 pointer-events-none"></div>
    </div>
  );
};

const Unreal = ({ onSelect }) => {
  return (
    <div
      onClick={() => onSelect('UnrealEngine')}
      className="relative group w-[100px] h-[100px] flex items-center justify-center cursor-pointer hover:scale-105 transition"
    >
      <div className="z-10 rounded-full border-4 border-cyan-400 text-cyan-400 flex flex-col items-center justify-center w-full h-full text-[14px] font-black tracking-wider font-mono text-center leading-tight">
        Unreal<br />Engine
      </div>
      <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-30 group-hover:scale-[1.2] transition duration-500 ease-out pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-20 group-hover:scale-[1.4] transition duration-700 ease-out delay-100 pointer-events-none"></div>
    </div>
  );
};

export default Explore; 
