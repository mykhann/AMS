import React from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "../shared/Navbar";
import { useSelector } from "react-redux";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Link to="/login">
        <h1 className="text-center mt-20 text-lg text-red-800">Please Login</h1>
      </Link>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl relative">
      
          <div className="flex flex-col lg:flex-row items-center lg:justify-between absolute top-0 right-0 mt-4 lg:mt-4">
            <Button
              onClick={() => navigate("/profile/appointments")}
              className="mr-4 bg-blue-800 hover:bg-blue-900"
            >
              View All Appointments
            </Button>
            <Button
              onClick={() => navigate("/edit-profile")}
              className="bg-red-700"
            >
              <PencilIcon className="w-6 h-6 text-white" />
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-16 lg:mt-0">
            <div className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover object-top shadow-md lg:w-48 lg:h-48"
              />
            </div>

            <div className="w-full lg:w-2/3 lg:pl-10 flex flex-col items-center lg:items-start">
              <h2 className="text-2xl font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-gray-600 mt-2">Email: {user.email}</p>
              <p className="text-gray-600 mt-1">Phone: {user.phone}</p>
              <p className="text-gray-600 mt-1">Role: {user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
