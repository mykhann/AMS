import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../reduxStore/authSlice";
import { toast } from "react-toastify";
import { setSingleDoctor } from "../../reduxStore/doctorsSlice";

const DoctorLogin = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler =async (e) => {
    e.preventDefault()
   try {
    const res=await axios.post("http://localhost:8000/api/v1/doctors/doctor-login",input,{withCredentials:true})
    if (res.data.success){
      toast.success(res.data.message)
      navigate("/doctor/appointments")
      dispatch(setSingleDoctor(res.data.doctor))
      
      
    }
   } catch (error) {
   toast.error(error.response.data.message)
    
   }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={onChangeInput}
                value={input.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={input.password}
                onChange={onChangeInput}
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-red-600"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center mt-3">
            <Link to="/login">
              <p className="font-medium cursor-pointer text-gray-900 ">
               <span className="text-blue-900">Login</span> as a user
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;
