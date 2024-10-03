import React from "react";
import { FaSearch, FaCalendarAlt, FaEye } from "react-icons/fa";
import useFetchDoctorAppointments from "../../customHooks/useFetchDoctorAppointments";
import { useSelector } from "react-redux";
import {  EditIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const DoctorAppointments = () => {
  const navigate=useNavigate()
  const { doctorAppointments } = useSelector((store) => store.doctors);
  useFetchDoctorAppointments();
  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-center font-bold text-white"> Appointments</h1>
        <div className="flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Search patient..."
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Button className="p-2 bg-cyan-900  text-white h-10 w-10 rounded-lg">
            <FaSearch />
          </Button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-cyan-900 text-white text-left">
              <th className="px-4 py-2">Patient Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorAppointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                <td className="px-4 py-2 text-sm md:text-base">
                  {appointment.patient.name}
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  {appointment.time}
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      appointment.status === "Upcoming"
                        ? "bg-green-500"
                        : appointment.status === "Completed"
                        ? "bg-gray-500"
                        : "bg-red-500"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2 text-sm md:text-base">
                  <EditIcon className="cursor-pointer" onClick={()=>navigate("/doctor/update-appointment")}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="space-x-4 mb-4 sm:mb-0">
          <Button onClick={()=>navigate(-1)} className="px-4 py-2 bg-cyan-800 text-black rounded-lg hover:bg-cyan-600">
            Back
          </Button>
         
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
