import React from "react";
import { Link } from "react-router-dom";
import {FaPlus } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const AdminDashboard = () => {
  return (
    <div className="relative flex flex-col bg-gradient-to-r from-blue-900 to-gray-900 h-screen ">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1 p-6 lg:p-8 overflow-auto">
          <h1 className="text-5xl text-white text-center font-extrabold mb-12">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Appointments Card */}
           

            <Link to="/admin/view-doctors" >
            <div className="flex flex-col justify-center bg-blue-200 text-blue-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <FaUserDoctor className="text-6xl mb-6 self-center text-blue-700" />
              <h2 className="text-3xl font-extrabold text-center">Doctors</h2>
              <p className="text-lg text-center mt-4">
                Manage and track all Doctors.
              </p>
            </div>
              
              </Link>
              

            {/* Create Doctor Card */}
            <Link to="/admin/add-doctor">
            <div className="flex flex-col bg-green-200 text-green-900  p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <FaPlus className="text-6xl mb-6 self-center text-green-700" />
              <h2 className="text-3xl font-extrabold text-center">Add Doctor </h2>
              <p className="text-lg text-center mt-4">
                Add a new Doctor
              </p>
              
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
