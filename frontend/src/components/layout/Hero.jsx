const Hero = () => {
    return (
      <section className="h-screen bg-cyan-950 flex flex-col justify-center items-center text-center">
        {/* Clean 3D Heading */}
        {/* <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 mb-10 relative inline-block hero-text">
          Book Appointments <br /> With Top Doctors
        </h1> */}
  
        {/* Book Appointment Button */}
        <button className="mt-6 px-10 py-4 bg-red-600 text-black font-semibold text-xl rounded-lg shadow-lg hover:bg-red-800 hover:scale-105 transition transform duration-300 ease-in-out">
          Book an Appointment
        </button>
  
        {/* 3D Text Effect */}
        <style jsx>{`
          .hero-text {
            position: relative;
            color: #fff;
            text-shadow: 2px 2px 0px #000, 4px 4px 5px rgba(0, 0, 0, 0.4);
          }
        `}</style>
      </section>
    );
  };
  
  export default Hero;
  