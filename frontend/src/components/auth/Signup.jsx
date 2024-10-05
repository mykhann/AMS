import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { setUser } from "../../reduxStore/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    avatar: null,
  });

  const onchangeInputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onchangeFileHandler = (e) => {
    const avatar = e.target.files[0];
    setInput((prevInput) => ({ ...prevInput, avatar }));
  };

  const submitHandler = async(e) => {
    e.preventDefault()
    const formData=new FormData();
    formData.append("name",input.name)
    formData.append("email",input.email)
    formData.append("password",input.password)
    formData.append("phone",input.phone)
    if (input.avatar){
      formData.append("avatar",input.avatar)
    }
    try {
      const res=await axios.post("http://localhost:8000/api/v1/users/register",formData,{
        headers:{"Content-Type":"multipart/form-data"},
        withCredentials:true
      })
      if (res.data.success){
       dispatch(setUser(res.data.user))
       navigate("/")
       toast.success(res.data.message)

      }
    } catch (error) {
      toast.error(error.response.data.message);
      
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg  w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <hr />
          <form onSubmit={submitHandler}>
            {/* Profile Picture Input */}
            <div className="mb-4">
              
              <div className="flex items-center mt-1">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="file"
                    name="avatar"
                    onChange={onchangeFileHandler}
                    className="sr-only"
                    accept="image/*"
                  />
                  <span className="inline-flex items-center justify-center w-full p-2 border border-gray-300 rounded-md bg-red-700 hover:bg-red-600 text-white">
                    <PhotoIcon className="h-6 w-16" />
                  </span>
                </label>
              </div>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              
              <input
                type="text"
                name="name"
                onChange={onchangeInputHandler}
                value={input.name}
                placeholder="Enter your name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
             
              <input
                type="email"
                name="email"
                onChange={onchangeInputHandler}
                value={input.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                placeholder="Enter your email address"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
             
              <input
                type="password"
                name="password"
                onChange={onchangeInputHandler}
                value={input.password}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                placeholder="Enter your password"
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
             
              <input
                type="number"
                name="phone"
                onChange={onchangeInputHandler}
                value={input.phone}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-900 text-white p-2 rounded-md hover:bg-red-600"
            >
              Sign up
            </button>
          </form>

          {/* Link to Login */}
          <div className="flex justify-center mt-2">
            <Link to="/login">
              <p className="font-medium cursor-pointer text-gray-900 hover:text-blue-600">
                LOG IN
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
