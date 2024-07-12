// src/Components/Main.js

import React from 'react';
import HeroSection from './HeroSection';
import WelcomeNote from './WelcomeNote';
import SimpleSlider from './SimpleSlider';

function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeNote />
      <SimpleSlider />
    </>
  );
}

export default Home;
