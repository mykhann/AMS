import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import useFetchDoctorById from "../../customHooks/useFetchDoctorById";
import { useDispatch, useSelector } from "react-redux";
import SingleDoctorCard from "./SingleDoctorCard";
import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setSingleAppointment } from "../../reduxStore/appointmentsSlice";
import { toast } from "react-toastify";

const AppointmentPage = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const params=useParams()
  const doctorId=params.id
  const { singleDoctor } = useSelector((store) => store.doctors);
  const [input,setInput]=useState({
    date:"",
    time:"",
    reason:"",
  })

  const inputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
      const res=await axios.post(`http://localhost:8000/api/v1/appointments/register-appointment/${doctorId}`,input,{
        headers: {'Content-Type': 'application/json'},
        withCredentials:true
      })
      if (res.data.success){
        dispatch(setSingleAppointment(res.data.appointment))
        toast.success(res.data.message)
        navigate(-1)
        
      }
      
    } catch (error) {
      toast.error(error.response.data.message)
      
    }
  }

  useFetchDoctorById();

  if (!singleDoctor) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Loading doctor information...
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          {singleDoctor.name}'s Appointment
        </h1>

        <div className="flex flex-col md:flex-row w-full max-w-5xl space-x-0 md:space-x-4">
          <div className="w-full max-w-md md:mr-4">
            <SingleDoctorCard />
          </div>

          <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

          <form onSubmit={submitHandler} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4 md:mb-0 mb-4">
            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select Date
              </label>
              <input
                type="date"
                id="date"
                onChange={inputHandler}
                value={input.date}
                name="date"
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Select Time
              </label>
              <input
                type="time"
                id="time"
                onChange={inputHandler}
                value={input.time}
                name="time"
                required
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="reason"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Reason for Appointment
              </label>
              <textarea
                id="reason"
                name="reason"
                onChange={inputHandler}
                value={input.reason}
                placeholder="Enter the reason for your appointment"
                required
                rows="4"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full py-4 px-4 text-white font-semibold rounded-md transition"
            >
              Book an appointment
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentPage;
