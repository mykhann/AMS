import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,


} from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { setDoctors } from "../../reduxStore/doctorsSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/doctors/get-all"
        );
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setDoctors(res.data.doctors));
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);
  const { doctors = [] } = useSelector((store) => store.doctors);
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className="py-12 ">
     
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
        Our Doctors
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {doctors.map((doctor, index) => (
          <Card key={index} className="max-w-[28rem] overflow-hidden shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={doctor.avatar}
                alt="Doctor Avatar"
                className="w-60 h-60 object-cover mx-auto"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                {doctor.name}
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                {`${doctor.experience} years experience`}
              </Typography>
              <Typography variant="h4" color="blue-gray">
                {doctor.specialization}
              </Typography>
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between"></CardFooter> */}
            <Button onClick={()=>navigate(`/appointment/${doctor._id}`)}>Book Appointment</Button>
          </Card>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default DoctorsList;
