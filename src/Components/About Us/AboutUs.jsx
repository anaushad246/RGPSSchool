import React from "react";
import './aboutUs.css'

function AboutUs() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">About Rabia Girls Public School</h1>
        <p className="text-xl">Learn more about our mission, vision, and values</p>
      </header>
      <section className="about-us-content grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="about-us-text">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-xl">Rabia Girls Public School was founded on January 26, 2021, by Khalid Hussain Nadwi with a vision to provide standard education for everyone, regardless of their background or circumstances. Our mission is to make people aware of the importance of education and build a good social environment, guided by the principles of Islam.</p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">To provide quality education, moral values, and character development, following the teachings of Prophet Muhammad (peace be upon him), and empowering girls to become confident, compassionate, and critically thinking individuals.</p>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl">To be a leading institution in girls' education, recognized for academic excellence, moral values, and community service.</p>
        </div>
        <div className="about-us-images flex justify-center mb-6 md:mb-0">
          <img
            src='a.png'
            alt="Rabia Girls Public School Logo"
            className="w-1/2 md:w-1/3 lg:w-1/4"
          />
        </div>
      </section>
      <section className="about-us-values grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="about-us-value flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl font-bold mb-2">Education for All</h3>
          <p className="text-xl">We believe that education is a fundamental right and should be accessible to everyone.</p>
        </div>
        <div className="about-us-value flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl font-bold mb-2">Moral Values</h3>
          <p className="text-xl">We aim to instill good moral values in our students, guided by the teachings of Islam.</p>
        </div>
        <div className="about-us-value flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl font-bold mb-2">Community Service</h3>
          <p className="text-xl">We strive to build a good social environment and serve our community.</p>
        </div>
        <div className="about-us-value flex flex-col items-center justify-center p-6">
          <h3 className="text-2xl font-bold mb-2">Parental Engagement</h3>
          <p className="text-xl">We believe that parents are our partners in education and value their involvement in our school.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;