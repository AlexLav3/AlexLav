import React from "react";
import LanguageModal from "./LanguageModal";
import ProjectModal from "./ProjectModal";

const Explore = ({ onProjectSelect, onLanguageSelect }) => (
  <div className="w-full md:w-1/2 flex justify-center items-center p-6">
    <div className="bg-rectangle w-full border-t border-l border-b border-cyan-400 rounded-tl-2xl rounded-bl-2xl p-6">
      <h3 className="text-2xl font-semibold text-accent mb-2">Explore Projects</h3>
      <p className="mb-4">Dive into my portfolio.</p>

      <section className="flex justify-center items-center gap-6"> 
      <CLanguage onSelect={onLanguageSelect} />
      <CppLanguage onSelect={onLanguageSelect} />
      <Unreal onSelect={onLanguageSelect} />
      </section>
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
      onClick={() => onSelect('Unreal Engine')}
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
