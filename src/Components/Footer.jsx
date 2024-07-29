// // src/Components/Main/Footer.jsx

// import React from 'react';
// import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

// function Footer() {
//   const phoneNumber = '9999999999'; // phoneNumber as string for formatting
//   const emailAddress = 'abcd123@gmail.com';
//   return (
//     <footer className="bg-gray-900 text-white p-2">
//       {/* YouTube Video Section */}
//       {/* Add your YouTube video here */}

//       {/* Contact Information Section */}
//       <section className="mt-4">
//         <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
//           <div className="flex flex-col items-center">
//             <div className="text-blue-500 text-4xl mb-2"><FaHome /></div>
//             <p className="text-gray-400">Sohraul Benipatti</p>
//             <p className="text-gray-400">Madhubani Bihar 847223</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-green-500 text-4xl mb-2"><FaPhoneAlt /></div>
//             <a href={`tel:${phoneNumber}`} className="text-white font-semibold py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
//               {phoneNumber}
//             </a>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="text-red-500 text-4xl mb-2"><FaEnvelope /></div>
//             <a href={`mailto:${emailAddress}`} className="text-white hover:text-gray-300 transition-colors duration-300">
//               {emailAddress}
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       {/* Embed your Google Maps iframe here */}

//       {/* Footer Bottom Section */}
//       <div className="text-center mt-4 opacity-75 text-gray-500">
//         © 2023 Your Company. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
// src/Components/Main/Footer.jsx

import React from 'react';
import { FaEnvelope, FaHome, FaPhoneAlt} from "react-icons/fa";

function Footer() {
  //const phoneNumber = '9999999999'; // phoneNumber as string for formatting
//   const emailAddress = 'abcd123@gmail.com';
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
            {/* <p>+91 7250717511</p> */}
            <a href="tel:+91 7250717511">91 7250717511</a>
          </div>
          <div>
            <h3 className="font-bold flex items-center justify-center"> <FaEnvelope /> </h3>
            {/* <p>rabiyagirlsschool@gmail.com</p> */}
            <a href="mailto:rabiyagirlsschool@gmail.com">rabiyagirlsschool@gmail.com</a>
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
