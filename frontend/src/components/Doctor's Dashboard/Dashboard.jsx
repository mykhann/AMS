import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const { singleDoctor } = useSelector((store) => store.doctors);

  useEffect(() => {
    if (!singleDoctor) {
      navigate("/doctor/login");
    }
  }, [singleDoctor, navigate]);

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1 p-6 lg:p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl text-white text-center font-extrabold mb-12">
            Doctor Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
            {/* Appointments Card */}
            <div className="flex flex-col justify-center bg-blue-200 text-blue-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <FaCalendarAlt className="text-6xl mb-6 self-center text-blue-700" />
              <h2 className="text-3xl font-extrabold text-center">Appointments</h2>
              <p className="text-lg text-center mt-4">
                Manage and track upcoming appointments.
              </p>
              <Link
                to="/doctor/view-appointments"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 self-center"
              >
                View Appointments
              </Link>
            </div>

            {/* Analytics Card */}
            <div className="flex flex-col bg-red-200 text-red-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <FaChartLine className="text-6xl mb-6 self-center text-red-700" />
              <h2 className="text-3xl font-extrabold text-center">Analytics</h2>
              <p className="text-lg text-center mt-4">
                View appointment and patient care trends.
              </p>
              <Link
                to="/doctor/manage-patients"
                className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 self-center"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
