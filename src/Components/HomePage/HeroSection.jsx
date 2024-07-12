// src/Components/HomePage/HeroSection.jsx

import React from 'react';


// src/Components/HomePage/HeroSection.jsx



function HeroSection() {
  const bgImage = "https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg";
  

  return (
    <main
      className=" w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white font-sans p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="max-w-lg mx-auto">
        <div className="bg-gray-800 bg-opacity-50 p-6  rounded-lg shadow-lg">
          <blockquote className="text-base ">
            <p>"Education is the most powerful weapon which you can use to change the world."</p>
            <footer className="text-lg font-semibold">- Nelson Mandela</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
