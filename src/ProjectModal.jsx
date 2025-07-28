import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="mb-4">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline"
        >
          View on GitHub
        </a>
        <button
          onClick={onClose}
          className="block mt-4 text-sm text-gray-400 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;