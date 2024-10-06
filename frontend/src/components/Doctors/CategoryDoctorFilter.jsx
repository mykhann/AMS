import { Button } from "@material-tailwind/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryDoctorFilter = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white text-gray-900 py-10 px-5 mb-6 md:mb-0">
    <div className="flex justify-center mb-4 items-center py-2">
      <input
        type="text"
        placeholder="Type to Search Doctors..."
        className="p-4 rounded-full border w-52 border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
      />
      <Button className="p-2 bg-blue-800 text-white h-12 w-14 hover:text-gray-900 rounded-lg">
        <FaSearch className="w-8 h-8" />
      </Button>
    </div>
  </section>
  );
};

export default CategoryDoctorFilter;
