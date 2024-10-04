import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetchAdminAppointments from "../../customHooks/useFetchAdminAppointments";
import { Button } from "@material-tailwind/react";

const AdminAppointments = () => {
  useFetchAdminAppointments();
  const { appointmentsAdmin } = useSelector((store) => store.appointments);
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Appointments
        </h1>

        <Button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2  mb-4 h-10 w-20 rounded-lg"
        >
          Back
        </Button>

        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white text-black">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4 text-left">Doctors</th>
                <th className="p-4 text-left">Patients</th>
                <th className="p-4 text-left">Appointment Status</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsAdmin.map((appointment, index) => (
                <tr key={index} className="border-b border-gray-300">
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

                  <td className="p-4">{appointment?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointments;
