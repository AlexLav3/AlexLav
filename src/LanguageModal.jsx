import React from 'react';

const projectsByLanguage = {
  C: [
    {
      name: 'MetaData Extractor',
      description: 'C program that extracts EXIF metadata (camera make, model, and GPS coordinates) directly from JPEG files, no third-party or platform-specific libraries required. Uses only standard C library functions (fopen, printf, etc.) and processes files as raw byte buffers.',
      github: 'https://github.com/AlexLav3/meta_extra',
    },
    {
      name: 'Another C Project',
      description: 'Description here...',
      github: 'https://github.com/example/c-project',
    },
  ],
  // add other languages here...
};

const LanguageModal = ({ language, onClose, onProjectSelect }) => {
  const projects = projectsByLanguage[language] || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Projects in {language}</h2>
        <ul>
          {projects.map((proj) => (
            <li
              key={proj.name}
              onClick={() => onProjectSelect(proj)}
              className="cursor-pointer text-cyan-500 hover:underline mb-2"
            >
              {proj.name}
            </li>
          ))}
        </ul>
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

export default LanguageModal;