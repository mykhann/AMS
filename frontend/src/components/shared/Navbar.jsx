import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { Button } from "@material-tailwind/react";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../../reduxStore/authSlice";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const { user } = useSelector((store) => store.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
  dispatch(setUser(null));
  navigate("/login")
  toast.success("Logged out successfully")
 
    
 
  };

  return (
    <nav className="relative bg-blue-900 text-white p-4 shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold tracking-wider">HealthCare</div>
        </Link>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/doctors"
            className="hover:text-gray-300 transition duration-300"
          >
            DOCTORS
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 transition duration-300"
          >
            ABOUT
          </Link>
        </div>

        {user ? (
          <div className="flex items-center space-x-4">
            <User
              onClick={() => navigate("/profile")}
              className="h-6 w-6 cursor-pointer hover:text-gray-300 transition duration-300"
            />
            <button
              onClick={handleLogout}
              className="flex items-center  bg-red-600 text-white mr-4 px-4 h-8 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              <FaSignOutAlt className="w-8 h-8"/>
            </button>
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="cursor-pointer bg-blue-800 hover:bg-blue-900 transition duration-300"
          >
            Login
          </Button>
        )}

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
            className="block py-2 hover:bg-blue-700 rounded-md transition duration-300"
          >
            Doctors
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:bg-blue-700 rounded-md transition duration-300"
          >
            About Us
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <User
                onClick={() => navigate("/profile")}
                className="h-6 w-6 cursor-pointer hover:text-gray-300 transition duration-300"
              />
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="cursor-pointer bg-red-800 hover:bg-red-900 transition duration-300"
            >
              Login
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
