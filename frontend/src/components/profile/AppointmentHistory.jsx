import React from "react";
import { useSelector } from "react-redux";
import useFetchAllAppointments from "../../customHooks/useFetchAllAppointments";

const AppointmentHistory = () => {
  const { appointments = [] } = useSelector((store) => store.appointments);

  useFetchAllAppointments();

  if (!appointments || appointments.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold">No appointments</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-end mt-9 p-6"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
        {appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105 max-w-[250px]" // Set a specific width for cards
          >
            <div className="flex items-center mb-1">
              <img
                src={appointment?.doctor.avatar}
                alt={`Dr. ${appointment?.doctor.name}`}
                className="w-20 h-20 rounded-full mb-32 mr-4"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-4">{`Dr. ${appointment.doctor.name}`}</h2>
                <p className="text-gray-700 text-sm ">
                  <strong>Date:</strong>{" "}
                  {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`font-semibold ${
                      appointment.status === "completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Reason:</strong> {appointment.reason}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentHistory;
