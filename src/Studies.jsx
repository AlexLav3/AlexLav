import React from "react";
import LanguageModal from "./LanguageModal";
import ProjectModal from "./ProjectModal";

const Studies = () => (
  <div className="flex flex-col items-center justify-center text-center px-12 py-12 mb-10 relative">
    <h1 className="text-3xl font-extrabold text-accent mb-10">My Journey</h1>

    <div className="bg-rectangle w-full min-h-[550px] border border-cyan-400 rounded-2xl p-5 relative overflow-hidden">
      <p className="mb-10 px-3 text-lg">
        In my learning journey, I have looked for as many resources as I could, researched plenty, and tried my best to always understand the underlying concepts. 
        Here are some of the major points in my learning process.
      </p>
    </div>

    <div className="absolute inset-6 top-[200px] flex flex-wrap justify-center gap-3 px-5">
      <p className="p-6 text-2xl text-accent">
        42Prague
        <div className="text-[0.95rem] text-foreground mt-2">  coding institute, projects about C, C++, Software dev, Linux,  </div>
      </p>
      <div className="p-5 text-2xl text-accent">
        CodeAcademy
        <div className="text-[0.95rem] text-foreground mt-2">C++ basics course</div>
      </div>
      <div className="p-0.5 mt-0 text-2xl text-accent">
        Structure and Interpretation of Computer Programs
        <div className="text-[0.95rem] text-foreground mt-1">teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and more.</div>
      </div>
      <p className="p-1 text-2xl text-accent">Tom Looman
        <div className="text-[0.95rem] text-foreground mt-1">  Intermediate/Advanced Unreal Engine focusing on C++</div>
      </p>
      <p className="p-1 text-2xl text-accent">Coursera
        <div className="text-[0.95rem] text-foreground mt-1 mb-10">  Platform with university courses, personally I took the Data Science from Duke University, and Cybersecurity from Maryland</div>
      </p>
    </div>
  </div>
);

export default Studies; 
