import { useState } from "react";
import { Menu, X, User } from "lucide-react"; 

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black text-white p-4 shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
       <Link to="/"> <div className="text-2xl font-bold tracking-wider">HealthCare</div></Link>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link to="/doctors" className="hover:text-gray-300">
            Doctors
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center space-x-4">
          <User  className="h-6 w-6 cursor-pointer hover:text-gray-300" />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown for smaller screens */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/doctors"
            className="block py-2 hover:bg-blue-700 rounded-md"
          >
            Doctors
          </Link>
          <Link to="/about" className="block py-2 hover:bg-blue-700 rounded-md">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
