import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { setDoctors } from "../../reduxStore/doctorsSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import { Verified } from "lucide-react";

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
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="py-12 ">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="max-w-[28rem] overflow-hidden shadow-lg"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={doctor.avatar}
                  alt="Doctor Avatar"
                  className="w-60 h-60 object-cover object-top mx-auto"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                 <div className="flex"> {doctor.name.toUpperCase()} <Verified className="mt-1 ml-3"/></div>
                </Typography>
                <Typography variant="p" color="blue-gray">
                  {doctor.specialization}
                </Typography>
              
              
                <Typography
                  variant="lead"
                  color="gray"
                  className="mt-1 font-normal"
                >
                  Appointment Fee : <span className="font-bold text-green-800">{`${doctor.fees} $ `}</span>
                </Typography>
                
              </CardBody>

              <Button onClick={() => navigate(`/appointment/${doctor._id}`)} className="bg-blue-800 hover:bg-blue-900">
                Book Appointment
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorsList;
