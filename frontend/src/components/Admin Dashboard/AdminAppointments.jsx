import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchAdminAppointments from "../../customHooks/useFetchAdminAppointments";
import { Button } from "@material-tailwind/react";

const AdminAppointments = () => {
  useFetchAdminAppointments();
  const { appointmentsAdmin } = useSelector((store) => store.appointments);
  const navigate = useNavigate();

  // Function to determine the status class
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white'; 
      case 'accepted':
        return 'bg-blue-500 text-white'; 
      case 'pending':
        return 'bg-gray-500 text-white'; 
      case 'cancelled':
        return 'bg-red-500 text-white';
      default:
        return 'bg-yellow-500 text-black'; 
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Appointments</h1>
        <Button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 mb-4 h-10 w-20 rounded-lg"
        >
          Back
        </Button>

        {appointmentsAdmin.length === 0 ? (
          <p className="text-white text-center">No appointments available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white text-black rounded-lg shadow-md">
              <thead className="bg-white text-black">
                <tr>
                  <th className="p-4 text-left">Doctors Info</th>
                  <th className="p-4 text-left">Patients Info</th>
                  <th className="p-4 text-left">Appointment Status</th>
                </tr>
              </thead>
              <tbody>
                {appointmentsAdmin.map((appointment) => (
                  <tr key={appointment._id} className="border-b border-gray-300">
                    {/* Doctor Info */}
                    <td className="p-4">
                      <div className="flex items-center">
                        <img
                          src={appointment.doctor?.avatar}
                          alt={appointment?.doctor?.name}
                          className="w-16 h-16 rounded-full mr-2"
                        />
                        <span>{appointment.doctor?.name}</span>
                      </div>
                    </td>
                    {/* Patient Info */}
                    <td className="p-4">
                      <div className="flex items-center">
                        <img
                          src={appointment?.patient?.avatar}
                          alt={appointment?.patient?.name}
                          className="w-16 h-16 rounded-full mr-2"
                        />
                        <span>{appointment?.patient?.name}</span>
                      </div>
                    </td>
                    {/* Appointment Status */}
                    <td className="p-4">
                      <button className={`px-4 py-2 rounded-full ${getStatusClass(appointment?.status)}`}>
                        {appointment?.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAppointments;
