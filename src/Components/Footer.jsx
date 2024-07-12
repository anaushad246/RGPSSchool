// src/Components/Main/Footer.jsx

import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mb-0">
      {/* YouTube Video Section */}
      {/* Add your YouTube video here */}

      {/* Contact Information Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center">
          <div>
            <h3 className="font-bold flex items-center justify-center"><FaHome /></h3>
            <p>Sohraul Benipatti</p>
            <p>Madhubani Bihar 847223</p>
          </div>
          <div>
            <h3 className="font-bold flex items-center justify-center"><FaPhoneAlt /> </h3>
            <p>+91 7250717511</p>
          </div>
          <div>
            <h3 className="font-bold flex items-center justify-center"> <FaEnvelope /> </h3>
            <p>rabiyagirlsschool@gmail.com</p>
          </div>


        </div>
      </section>

      {/* Map Section */}
      {/* Embed your Google Maps iframe here */}

      {/* Footer Bottom Section */}
      <div className="text-center mt-4 opacity-50">
        © 2023 Copyright:
        
      </div>
    </footer>
  );
}

export default Footer;
