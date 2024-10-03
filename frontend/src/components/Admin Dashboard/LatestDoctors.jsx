import React from 'react';

const LatestDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Dr. Alex Johnson",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="bg-blue-200 text-blue-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Latest Doctors</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow-lg">
          <thead>
            <tr className="border-b border-blue-700">
              {/* <th className="py-2 px-4 text-left">Doctor Name</th>
              <th className="py-2 px-4 text-left">Doctor Image</th> */}
            </tr>
          </thead>
          <tbody className=''>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b border-blue-300">
                <td className="py-2 px-4 text-center">{doctor.name}</td>
                <td className="py-2 px-4 text-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full inline-block"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestDoctors;
