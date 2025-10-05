import React from 'react';
// import hero from '../assets/R.jpeg';

function Herosection() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://www.nitj.ac.in/today/assets/header2.webp)",
        }}
      ></div>


      {/* Centered text */}
      <div className="absolute inset-0 flex items-start justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          RESEARCH HIGHLIGHTS
        </h1>
      </div>
    </div>
  );
}

export default Herosection;
