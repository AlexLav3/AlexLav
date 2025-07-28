import React, { useState } from 'react';
import Navbar from './Navbar';
import Explore from './Explore';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Contacts from './Contacts';
import ProjectModal from './ProjectModal';

<meta name="viewport" content="width=device-width, initial-scale=1" />

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      <Navbar />
      <Home />
      <section className="flex flex-col md:flex-row">
        <About />
        <Explore onProjectSelect={setSelectedProject} />
      </section>
      <Contacts />
      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};
export default App;