import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { FaSignOutAlt } from "react-icons/fa";
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
    navigate("/login");
    toast.success("Logged out successfully");
  };

  return (
    <nav
      className="relative bg-blue-900 text-white shadow-md"
      style={{ height: "64px" }}
    >
      <div className="container mx-auto flex items-center justify-between h-full p-4">
        <Link to="/">
          <div className="text-2xl font-bold tracking-wider hover:scale-110 transition-transform">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 h-28 object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link
            to="/doctors"
            className="hover:text-gray-300 hover:scale-110 transition duration-300"
          >
            DOCTORS
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300 hover:scale-110 transition duration-300"
          >
            ABOUT
          </Link>
        </div>

        {user ? (
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <User
                onClick={() => navigate("/profile")}
                className="h-6 w-6 cursor-pointer hover:text-gray-300 transition duration-300"
              />
            </div>
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center bg-red-600 text-white mr-4 px-4 h-8 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              <FaSignOutAlt className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="hidden md:flex cursor-pointer rounded-full bg-blue-800 hover:bg-blue-900 hover:scale-105 transition duration-300"
          >
            Login
          </Button>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white p-4 shadow-md">
          <Link
            to="/doctors"
            className="block py-2 hover:bg-blue-800 rounded-md transition duration-300 text-center"
          >
            Doctors
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:bg-blue-800 rounded-md transition duration-300 text-center"
          >
            About Us
          </Link>
          {user ? (
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center justify-center hover:bg-blue-800 rounded-md p-2 transition duration-300 text-center w-full"
              >
                <User className="h-6 w-6 mr-2" />
                View Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center hover:bg-red-700 rounded-md p-2 transition duration-300 text-center w-full"
              >
                <FaSignOutAlt className="inline w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="cursor-pointer bg-blue-800 rounded-full hover:bg-blue-900 transition duration-300"
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
