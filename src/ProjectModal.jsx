import React from 'react';

const ProjectModal = ({ project, onClose, onBack }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <img src={project.img} className="h-50 w-full rounded-md mb-4" />
        <p className="mb-4">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline"
        >
          View on GitHub
        </a>

        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <button onClick={onBack} className="hover:text-white">
            ← Back
          </button>
          <button onClick={onClose} className="hover:text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;