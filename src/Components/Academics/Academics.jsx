import React from 'react';

function Academics() {
  return (
    <div className="font-sans leading-4">
      <section id="main" className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Our Academic Programs</h1>
        <p className="mb-10 text-center text-gray-600 max-w-2xl mx-auto">
          Our school is committed to providing a comprehensive education that combines academic excellence with Islamic values. We offer three distinct programs:
        </p>
      </section>

      <div className="section mb-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Primary School (Up to 5th Class)</h2>
        <img
          className="rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
          src="https://media.istockphoto.com/id/1339156017/photo/muslim-mother-helping-her-daughter-with-homework.jpg?s=1024x1024&w=is&k=20&c=GREwkGodoeAh8U73Gq6jA3pVVOb5PDru5M0AaWPMqnw="
          alt="Primary School"
        />
        <p className="mb-4 text-gray-700">
          Our primary school program focuses on building a strong foundation in academics, along with Islamic values and principles.
        </p>
        <ul className="list-disc space-y-2 mb-6 ml-4 text-gray-700">
          <li>Core subjects: English, Math, Science, Social Studies</li>
          <li>Islamic studies and character development</li>
          <li>Extracurricular activities for overall growth</li>
        </ul>
      </div>

      <div className="section mb-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Darul-Al-Tahfiz (Quran Memorization)</h2>
        <img
          className="rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
          src="https://media.istockphoto.com/id/1396862365/photo/muslim-woman-in-mosque-reading-quran-on-wood-background-concept-of-islamic-education.jpg?s=1024x1024&w=is&k=20&c=1c12vUgD9p3RJBPAWsT9J_SGXkHk_W39qJ0neTEcSIk="
          alt="Darul-Al-Tahfiz"
        />
        <p className="mb-4 text-gray-700">
          Our Darul-Al-Tahfiz program is dedicated to helping students memorize the Holy Quran with proper tajweed and recitation.
        </p>
        <ul className="list-disc space-y-2 mb-6 ml-4 text-gray-700">
          <li>Quran memorization with tajweed guidance</li>
          <li>Islamic studies and character development</li>
          <li>Spiritual growth and development</li>
        </ul>
      </div>

      <div className="section mb-10 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Islamiyat Classes (11th, 12th, and Higher)</h2>
        <img
          className="rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
          src="https://media.istockphoto.com/id/1985314599/photo/senior-muslim-woman-reading-quran-at-home.jpg?s=1024x1024&w=is&k=20&c=Aq92wiMWyVXWh1K3Yov4YziRy9iwTXflel6I2-0fEBc="
          alt="Higher Classes"
        />
        <p className="mb-4 text-gray-700">
          Our higher classes program focuses on advanced Islamic education, along with academic excellence.
        </p>
        <ul className="list-disc space-y-2 mb-6 ml-4 text-gray-700">
          <li>In-depth Islamic studies and scholarship</li>
          <li>Academic excellence in various subjects</li>
          <li>Leadership and character development</li>
        </ul>
      </div>
    </div>
  );
}

export default Academics;
