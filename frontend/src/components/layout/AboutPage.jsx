import React from "react";
import Navbar from "../shared/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
        <section className="max-w-6xl mx-auto p-6 my-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center">About Us?</h2>
       
      </section>


      {/* Mission Statement */}
      <section className="max-w-6xl mx-auto p-6 my-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="mt-4 text-gray-700 text-center">
          Our mission is to provide high-quality healthcare services to our
          community, ensuring accessibility, compassion, and excellence in
          patient care. We strive to make a positive impact on the lives of
          those we serve.
        </p>
      </section>


      
    </div>
  );
};

export default AboutPage;
