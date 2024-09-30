import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const doctors = [
  {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    exp: "12",
    fees: 150,
    avatar: "https://via.placeholder.com/150"
  },
  {
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    exp: "8",
    fees: 120,
    avatar: "https://via.placeholder.com/150"
  },
  {
    name: "Dr. Alice Brown",
    specialization: "Neurologist",
    exp: "10",
    fees: 200,
    avatar: "https://via.placeholder.com/150"
  }
];

const DoctorsList = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">Our Doctors</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {doctors.map((doctor, index) => (
          <Card key={index} className="w-96 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <CardHeader floated={false} className="h-40">
              <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover rounded-md" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" color="gray" className="mb-2">
                {doctor.name}
              </Typography>
              <Typography color="gray" className="font-medium">
                {doctor.specialization}
              </Typography>
              <Typography color="gray" className="mt-2">
                Experience: {doctor.exp} years
              </Typography>
              <Typography color="gray" className="mt-2">
                Fees: <span className="font-semibold text-gray-700">${doctor.fees}</span>
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center pt-4">
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
                Book Appointment
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
