import React from 'react';
import useFetchAdminAppointments from '../../customHooks/useFetchAdminAppointments';
import { useSelector } from 'react-redux';

const LatestAppointments = () => {
  useFetchAdminAppointments();
  const { appointmentsAdmin = [] } = useSelector((store) => store.appointments);
  const filteredAppointments = [...appointmentsAdmin].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const latestDoctors = filteredAppointments.slice(0, 3);

  return (
    <div className="bg-blue-400 text-blue-900 p-6 rounded-lg w-full shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Latest Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Patients</th> 
              <th className="py-2 px-4 ">Doctors</th>  
            </tr>
          </thead>
          <tbody>
            {latestDoctors.map((appointment) => (
              <tr key={appointment.id} className="">
                {/* Patient Column */}
                <td className="py-2 px-6 text-left"> {/* Aligned to the left */}
                  <div className="flex items-center justify-start space-x-4">
                    <img
                      src={appointment.patient.avatar}
                      alt={appointment.patient.name}
                      className="w-20 h-20 rounded-full object-cover object-top"
                    />
                    <span className="text-left">{appointment.patient.name}</span>
                  </div>
                </td>
                {/* Doctor Column */}
                <td className="py-2 px-6 text-left"> {/* Aligned to the left */}
                  <div className="flex items-center ml-16 space-x-4">
                    <img
                      src={appointment.doctor.avatar}
                      alt={appointment.doctor.name}
                      className="w-20 h-20 rounded-full object-cover object-top"
                    />
                    <span className="text-left">{appointment.doctor.name}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestAppointments;
