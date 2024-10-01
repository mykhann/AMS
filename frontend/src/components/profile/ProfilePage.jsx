import React from "react";
import { Button } from "@material-tailwind/react";
import Navbar from "../shared/Navbar";
import { useSelector } from "react-redux";
import AppointmentHistory from "./AppointmentHistory";

const ProfilePage = () => {
  const { user } = useSelector((store) => store.auth);
  if (!user){
   return <h1 className="text-center mt-20 text-lg">Please Login</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            {/* Profile Picture */}
            <div className="w-full lg:w-1/3 flex justify-center mb-4 lg:mb-0">
              <img
                src={user.avatar || "https://via.placeholder.com/150"} // Fallback image
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover shadow-md lg:w-48 lg:h-48"
              />
            </div>

            {/* User Info */}
            <div className="w-full lg:w-2/3 lg:pl-10 flex flex-col items-center lg:items-start">
              <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 mt-2">Email: {user.email}</p>
              <p className="text-gray-600 mt-1">Phone: {user.phone}</p>
              {/* <p className="text-gray-600 mt-1">Role: {user.role}</p> */}

              <Button className="mt-4">Edit Profile</Button>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-red-600">Appointment History</h1>
      <AppointmentHistory/>
      </div>
    </>
  );
};

export default ProfilePage;
