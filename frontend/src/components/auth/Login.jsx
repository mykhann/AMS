import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Login=() => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
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
            <Link to="/signup">
              <p className="font-medium cursor-pointer text-gray-900 hover:text-red-600">
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
