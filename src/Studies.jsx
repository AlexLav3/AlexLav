import React from "react";
import LanguageModal from "./LanguageModal";
import ProjectModal from "./ProjectModal";

const Studies = () => (
  <div className="mx-auto md:flex flex-col items-center justify-center text-center px-12 py-12 mb-10 relative">
    <h1 className="text-3xl font-extrabold text-accent mb-10"> My Journey</h1>

    <div className="mx-auto bg-rectangle w-full border border-cyan-400 rounded-2xl p-5">
  <p className="mb-10 px-3 text-lg">
    In my learning journey, I have looked for as many resources as I could, researched plenty, and tried my best to always understand the underlying concepts. 
    Here are some of the major points in my learning process.
  </p>

  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 px-2">
    <div className="p-3 md:p-5 text-2xl text-accent">
      42Prague
      <div className="text-[0.85rem] md:text-[0.95rem] text-foreground mt-2">
        coding institute, projects about C, C++, Software dev, Linux
      </div>
    </div>

    <div className="p-3 md:p-5 text-2xl text-accent">
      CodeAcademy
      <div className="text-[0.85rem] md:text-[0.95rem] text-foreground mt-2">
        C++ course
      </div>
    </div>

    <div className="p-3 md:p-5 text-2xl text-accent">
      Structure and Interpretation of Computer Programs
      <div className="text-[0.85rem] md:text-[0.95rem] text-foreground mt-2">
        MIT book, teaches fundamental principles of computer programming, including recursion, abstraction, modularity, and more.
      </div>
    </div>

    <div className="p-3 md:p-5 text-2xl text-accent">
      Tom Looman
      <div className="text-[0.85rem] md:text-[0.95rem] text-foreground mt-2">
        Intermediate/Advanced Unreal Engine focusing on C++
      </div>
    </div>

    <div className="p-3 md:p-5 text-2xl text-accent">
      Coursera
      <div className="text-[0.85rem] md:text-[0.95rem] text-foreground mt-2">
        University courses, Data Science from Duke University, and Cybersecurity from Maryland
      </div>
    </div>
  </div>
</div>
</div>
    
);

export default Studies; 
