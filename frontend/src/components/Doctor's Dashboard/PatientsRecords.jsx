import React from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import useFetchDoctorAppointments from "../../customHooks/useFetchDoctorAppointments";

const PatientsRecords = () => {
  // const {doctorAppointments}=useSelector((store)=>store.doctor)

  const { doctorAppointments } = useSelector((store) => store.doctors);
  useFetchDoctorAppointments();
  // Sample data
  const totalPatients = doctorAppointments.length;
  const pendingAppointments = doctorAppointments.filter(
    (appointment) => appointment.status === "pending"
  ).length;
  const activePatients = 95;
  const dischargedPatients = 5;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Patient Records</h1>
        <div className="flex items-center">
          <FaUser className="mr-2 text-blue-500" />
          <span className="text-xl font-semibold">
            {totalPatients} Total Patients
          </span>
        </div>
      </div>

      {/* Additional Patient Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Pending Patients</h3>
          <p className="text-2xl text-blue-600">{pendingAppointments}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Active Patients</h3>
          <p className="text-2xl text-green-600">{activePatients}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold">Discharged Patients</h3>
          <p className="text-2xl text-red-600">{dischargedPatients}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsRecords;
