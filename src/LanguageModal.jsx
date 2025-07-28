import React from 'react';

const projectsByLanguage = {
  C: [
    {
      name: 'MetaData Extractor',
      description: 'C program that extracts EXIF metadata (camera make, model, and GPS coordinates) directly from JPEG files, no third-party or platform-specific libraries required. Uses only standard C library functions (fopen, printf, etc.) and processes files as raw byte buffers.',
      github: 'https://github.com/AlexLav3/meta_extra',
    },
    {
      name: 'So long',
      description: 'Mini 2D game made with minilibx, 42 project.',
      github: 'https://github.com/AlexLav3/so_long',
    },
    {
      name: 'Philosophers',
      description: 'This project is a simulation of the classic Dining Philosophers problem, a concurrency challenge. Each philosopher is a thread and must follow rules around eating, thinking, and not dying.',
      github: 'https://github.com/AlexLav3/philo',
    },
    {
      name: 'Push Swap',
      description: 'This is a sorting algorithm challenge from 42 school. The goal is to sort a stack of integers using only a limited set of stack operations, using as few moves as possible.',
      github: 'https://github.com/AlexLav3/push_swap',
    },
  ],
   Cpp: [
    {
      name: 'SFML WIP Mini game',
      description: 'Cpp mini game using SFML',
      github: 'https://github.com/AlexLav3/SFML',
    },
    {
      name: 'TicTacToe',
      description: 'TicTacToe in C++',
      github: 'https://github.com/AlexLav3/TIcTacToe',
    },
  ],
  UnrealEngine: [
    {
      name: 'Fox Game',
      description: 'My own game project! Still in development. Jumping animation done by me, has mechanics on objects appearing after interacting with them, general movement, stamina bar w its regeration, animals with AI behavioral trees. The 3D models were found for free online.',
      github: 'https://github.com/AlexLav3/Rpg',
    },
    {
      name: 'Pac Man 3D',
      description: 'PacMan made in 3D with unreal Engine, mostly for learning AI behaviour in Unreal,vectors manipulation and path-finding for the ghosts(cubes), not the best graphics, I\'m not a 3D models creator',
      github: 'https://github.com/AlexLav3/PacManPRoject',
    },
  ],
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