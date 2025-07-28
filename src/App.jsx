import React, { useState } from 'react';
import Navbar from './Navbar';
import Explore from './Explore';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Contacts from './Contacts';
import ProjectModal from './ProjectModal';
import LanguageModal from './LanguageModal';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeLanguageModal = () => setSelectedLanguage(null);
  const closeProjectModal = () => setSelectedProject(null);

  const handleProjectSelect = (proj) => {
    setSelectedProject(proj);
  };

  const handleBackToLanguage = () => {
    setSelectedProject(null); 
  };


  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <Navbar />
      <Home />
      <section className="flex flex-col md:flex-row">
        <About />
        <Explore onLanguageSelect={setSelectedLanguage} />
      </section>
      <Contacts />
      <Footer />

      {selectedLanguage && !selectedProject && (
        <LanguageModal
          language={selectedLanguage}
          onClose={closeLanguageModal}
          onProjectSelect={handleProjectSelect}
        />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
          onBack={handleBackToLanguage} 
        />
      )}
    </div>
  );
};

export default App;