import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { PhotoIcon } from "@heroicons/react/24/outline";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg mt-20 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form>
            {/* Profile Picture Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="flex items-center mt-1">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="file"
                    name="file"
                    className="sr-only"
                    accept="image/*"
                  />
                  <span className="inline-flex items-center justify-center w-full p-2 border border-gray-300 rounded-md bg-gray-700 hover:bg-red-600 text-white">
                    <PhotoIcon className="h-6 w-16" />
                  </span>
                </label>
              </div>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Address Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone No</label>
              <input
                type="number"
                name="phoneNo"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white p-2 rounded-md hover:bg-red-600"
            >
              Sign up
            </button>
          </form>

          {/* Link to Login */}
          <div className="flex justify-center mt-3">
            <Link to="/login">
              <p className="font-medium cursor-pointer text-gray-900 hover:text-red-600">
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
