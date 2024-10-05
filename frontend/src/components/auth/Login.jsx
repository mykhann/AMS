import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../reduxStore/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/login", input, { withCredentials: true });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
        dispatch(setUser(res.data.user));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                onChange={onChangeInput}
                value={input.email}
                placeholder="Enter your email address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={input.password}
                onChange={onChangeInput}
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white mb-4 p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="font-medium cursor-pointer text-gray-900 text-center">
            <Link to="/doctor/login"><span className="text-blue-900">Login</span></Link> as a doctor
          </p>
          <div className="flex justify-center mt-4">
            <Link to="/signup">
              <p className="font-medium cursor-pointer text-red-900 hover:text-red-600">
                CREATE ACCOUNT
              </p>
            </Link>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Login;
