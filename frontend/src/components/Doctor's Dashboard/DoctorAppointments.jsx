import React from "react";
import { FaSearch } from "react-icons/fa";
import useFetchDoctorAppointments from "../../customHooks/useFetchDoctorAppointments";
import { useSelector } from "react-redux";
import { EditIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const DoctorAppointments = () => {
  const navigate = useNavigate();
  const { doctorAppointments } = useSelector((store) => store.doctors);
  const { singleDoctor } = useSelector((store) => store.doctors);
  useFetchDoctorAppointments();

  return (
    <div className="p-6 bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen">
      <h1 className="text-center mb-5 text-white font-bold text-lg">
        <span className="text-red-900">{singleDoctor?.name}'s</span> Appointments
      </h1>
      <div className="flex shadow-md rounded-lg mb-3 overflow-x-auto max-w-3xl mx-auto">
        <Button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
        >
          Back
        </Button>

        <div className="flex space-x-2 ml-4 items-center">
          <input
            type="text"
            placeholder="Search patient..."
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Button className="p-2 bg-black text-white h-10 w-10 hover:text-gray-900 rounded-lg">
            <FaSearch />
          </Button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto max-w-3xl mx-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-black text-left">
              <th className="px-4 py-2">Patient Info</th>
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
                className="border-b text-black hover:bg-gray-200 transition"
              >
                <td className="px-4 py-2 text-sm md:text-base flex items-center space-x-2">
                  <img
                    src={appointment?.patient.avatar}
                    alt={`${appointment?.patient.name}'s photo`}
                    className="h-20 w-20 md:h-20 md:w-20 rounded-full object-cover object-top" // Ensure rounded-full is applied
                  />
                  <span>{appointment?.patient.name}</span>
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  {new Date(appointment?.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  {appointment?.time}
                </td>
                <td className="px-4 py-2 text-sm md:text-base">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      appointment?.status === "completed"
                        ? "bg-green-500" 
                        : appointment?.status === "accepted"
                        ? "bg-blue-500" 
                        : appointment?.status === "pending"
                        ? "bg-gray-500" 
                        : appointment?.status === "cancelled"
                        ? "bg-red-500" 
                        : "bg-yellow-500" 
                    }`}
                  >
                    {appointment?.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2 text-sm md:text-base">
                  <EditIcon
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/doctor/update-appointment/${appointment?._id}`)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center"></div>
    </div>
  );
};

export default DoctorAppointments;
