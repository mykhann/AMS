import React from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import useFetchDoctorAppointments from "../../customHooks/useFetchDoctorAppointments";

const PatientsRecords = () => {
  const { doctorAppointments } = useSelector((store) => store.doctors);
  useFetchDoctorAppointments();

  const totalPatients = doctorAppointments.length;
  const pendingAppointments = doctorAppointments.filter(
    (appointment) => appointment.status === "pending"
  ).length;

  const complettedAppointments = doctorAppointments.filter(
    (appointment) => appointment.status === "completed"
  ).length;
  const cancelledAppointments = doctorAppointments.filter(
    (appointment) => appointment.status === "cancelled"
  ).length;

  return (
    <div className="p-6 bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white">Patient Records</h1>
        <div className="flex items-center">
          <FaUser className="mr-2 text-blue-500" />
          <span className="text-xl font-semibold text-white">
            {totalPatients} Total Patients
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-200 shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Pending Patients
          </h3>
          <p className="text-2xl text-blue-600">{pendingAppointments}</p>
        </div>
        <div className="bg-green-400 shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-white">
            Successful Appointments
          </h3>
          <p className="text-2xl text-white">{complettedAppointments}</p>
        </div>
        <div className="bg-yellow-900 shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-white">
            Cancelled Appointments
          </h3>
          <p className="text-2xl text-white">{cancelledAppointments}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsRecords;
