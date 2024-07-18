// src/Components/Main/Footer.jsx

import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const phoneNumber = 9999999999;
  const emailAddress = 'abcd123@gmail.com';
  return (
    <footer className="bg-gray-800 text-white p-4 mb-0">
      {/* YouTube Video Section */}
      {/* Add your YouTube video here */}

      {/* Contact Information Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold ">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center">
          <div className="flex flex-col items-center">
            <h3 className="font-bold flex items-center justify-center text-blue-500"><FaHome /></h3>
            <p className="text-gray-300">Sohraul Benipatti</p>
            <p className="text-gray-300">Madhubani Bihar 847223</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h3 className="font-bold flex items-center justify-center text-green-500"><FaPhoneAlt /></h3>
            <a href={`tel:${phoneNumber}`} className=" hover:bg-silver-700 text-white font-bold py-2 px-4 rounded">
              {phoneNumber}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold flex items-center justify-center text-red-500"><FaEnvelope /></h3>
            <a href={`mailto:${emailAddress}`} className="text-white hover:text-gray-300">
              {emailAddress}
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* Embed your Google Maps iframe here */}

      {/* Footer Bottom Section */}
      <div className="text-center mt-4 opacity-50 text-gray-400">
        © 2023 Copyright:
      </div>
    </footer>
  );
}

export default Footer;