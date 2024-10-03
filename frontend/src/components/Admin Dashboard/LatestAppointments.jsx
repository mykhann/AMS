import React from 'react'

const LatestAppointments = () => {
    const appointments = [
        {
          id: 1,
          patient: {
            name: "Alice Brown",
            image: "https://via.placeholder.com/100",
          },
          doctor: {
            name: "Dr. John Doe",
            image: "https://via.placeholder.com/100",
          },
        },
        {
          id: 2,
          patient: {
            name: "Bob Green",
            image: "https://via.placeholder.com/100",
          },
          doctor: {
            name: "Dr. Jane Smith",
            image: "https://via.placeholder.com/100",
          },
        },
        {
          id: 3,
          patient: {
            name: "Charlie Black",
            image: "https://via.placeholder.com/100",
          },
          doctor: {
            name: "Dr. Alex Johnson",
            image: "https://via.placeholder.com/100",
          },
        },
      ];
    
  return (
    <div className="bg-red-200 text-red-900 rounded-lg p-6 shadow-lg">
    <h2 className="text-3xl font-bold text-center mb-3">
      Latest Appointments
    </h2>
    <div className="overflow-x-auto ">
      <table className="min-w-full rounded-lg shadow-lg">
        <thead>
          <tr className="border-b border-red-700">
            <th className="py-2 px-4 text-left">Patient Name</th>
            <th className="py-2 px-4 text-left">Patient Image</th>
            <th className="py-2 px-4 text-left">Doctor Name</th>
            <th className="py-2 px-4 text-left">Doctor Image</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b border-red-300">
              <td className="py-2 px-4 text-center">
                {appointment.patient.name}
              </td>
              <td className="py-2 px-4 text-center">
                <img
                  src={appointment.patient.image}
                  alt={appointment.patient.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </td>
              <td className="py-2 px-4 text-center">
                {appointment.doctor.name}
              </td>
              <td className="py-2 px-4 text-center">
                <img
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default LatestAppointments