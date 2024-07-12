import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/HomePage/Header';
import './App.css';
import Home from './Components/HomePage/Home';
import Academics from './Components/Academics/Academics';
import Gallery from './Components/Gallery/Gallery';
import Events from './Components/Events/Events';
import ContactUs from './Components/Contact Us/ContactUs';
import AboutUs from './Components/About Us/AboutUs';

function App() {
  return (
    <div className='w-screen m-0 p-0'>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/events" element={<Events />} />
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
