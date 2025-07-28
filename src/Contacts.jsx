import React from "react";

const Contacts = () => (
   <section id="Contact" className="flex flex-col items-center justify-center text-center px-12 py-12 mb-10">
    <h1 className="text-3xl font-extrabold text-accent mb-10">Contact me</h1>
    <section className="flex justify-center items-center gap-6"> 
    <Git />
    <Linkedin />
    <Gmail />
    </section>
  </section>
); 

const Git =() =>(
      <a
        href="https://github.com/AlexLav3"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex justify-center p-4 rounded-md drop-shadow-xl bg-gradient-to-t from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#1a1a2e] hover:to-purple-400"
      > 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 15"
        class="w-8"
      >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        fill="currentColor"
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
      ></path>
      </svg>
      <span
        class="absolute text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:text-cyan-100 group-hover:text-1xl group-hover:-translate-y-10 duration-700">
        GitHub
      </span>
      </a>
);

const Linkedin = () => (

    <a
      href="https://www.linkedin.com/in/elena-lavricheva-77679a227/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center items-center p-4 rounded-md drop-shadow-xl bg-gradient-to-t from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-white-60 hover:to-[#0A66C2]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
        fill="currentColor"
      >
        <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.025-3.06-1.867-3.06-1.869 0-2.156 1.46-2.156 2.965v5.699h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.56 2.839-1.56 3.034 0 3.595 1.997 3.595 4.59v5.603z"/>
      </svg>
      <span className="absolute text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:text-cyan-100 group-hover:text-1xl group-hover:-translate-y-11 duration-700">
        LinkedIn
      </span>
    </a>
);


const Gmail = () => (
  <section className="flex justify-center items-center">
    <a
      href="mailto:alexlavrich03@gmail.com"
      className="group flex justify-center items-center p-4 rounded-md drop-shadow-xl bg-gradient-to-t from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:to-[#00ffff] hover:from-white-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300"
        fill="currentColor"
      >
        <path d="M502.3 190.8L327.4 338.5 502.3 482c6.7-8 9.7-18.4 9.7-28.6V219.4c0-11.4-3.8-21.8-9.7-28.6zM256 344.2L474.1 158.6c-3.8-4.3-8.3-8-13.3-11L256 300.7 51.2 147.6c-5 3-9.5 6.7-13.3 11L256 344.2zm-45.4-5.7L9.7 190.8C3.8 197.6 0 208 0 219.4v234c0 10.2 3 20.6 9.7 28.6l201.4-173.5zM507.8 113c-3.8-4.3-8.3-8-13.3-11L256 272.5 17.5 102C12.5 105 8 108.7 4.2 113L256 338.5 507.8 113z"/>
      </svg>
      <span className="absolute text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:text-cyan-100 group-hover:text-1xl group-hover:-translate-y-11 duration-700">
        Gmail
      </span>
    </a>
  </section>
);

export default Contacts;