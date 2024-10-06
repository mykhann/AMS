import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 p-2">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-6 bg-blue-600 text-center md:justify-between">
       <Link to="/">
       <div>
        <img
          src="/logo.png"
          alt="logo-ct"
          className="w-44 h-44 object-contain hover:scale-105 transition-transform"
        />
        </div></Link>
        <ul className="flex flex-wrap items-center gap-y-1 gap-x-4">
          <Link to="/about">
            <li>
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal text-white hover:scale-105 transition-all transform"
              >
                About Us
              </Typography>
            </li>
          </Link>

          <Link to="/doctors">
            <li>
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal text-white hover:scale-105 transition-all transform"
              >
                Staff
              </Typography>
            </li>
          </Link>

          <Link to="/doctor/login">
            <li>
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal text-white hover:scale-105 transition-all transform"
              >
                Doctor-Dashboard
              </Typography>
            </li>
          </Link>

          <Link to="/admin/dashboard">
            <li>
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal text-white hover:scale-105 transition-all transform"
              >
                Admin-Dashboard
              </Typography>
            </li>
          </Link>
        </ul>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <Typography className="text-center text-white font-bold">
        &copy; 2024 HealthCare
      </Typography>
    </footer>
  );
};

export default Footer;
