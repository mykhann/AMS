import Home from "./components/layout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsList from "./components/Doctors/DoctorsList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";
import ProfilePage from "./components/profile/ProfilePage";
import AppointmentPage from "./components/Doctors/AppointmentPage";
import { NextUIProvider } from "@nextui-org/react";
import EditProfile from "./components/profile/EditProfile";

import Dashboard from "./components/Doctor's Dashboard/Dashboard";
import DoctorAppointments from "./components/Doctor's Dashboard/DoctorAppointments";
import PatientsRecords from "./components/Doctor's Dashboard/PatientsRecords";
import DoctorLogin from "./components/Doctor's Dashboard/DoctorLogin";
import UpdateAppointment from "./components/Doctor's Dashboard/UpdateAppointment";
import AdminDashboard from "./components/Admin Dashboard/AdminDashboard";
import DoctorTableUI from "./components/Admin Dashboard/DoctorTableUI";
import AddDoctor from "./components/Admin Dashboard/AddDoctor";


const router = createBrowserRouter([
  // user profile 
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/doctors",
    element: <DoctorsList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/appointment/:id",
    element: <AppointmentPage />,
  },

  // Doctor profile 
  {
    path:"/doctor/appointments",
    element:<Dashboard/>
  },
 ,
  {
    path:"/doctor/appointments",
    element:<Dashboard/>
  },
  {
    path:"/doctor/appointments",
    element:<Dashboard/>
  },
  {
    path:"/doctor/view-appointments",
    element:<DoctorAppointments/>
  },
  {
    path:"/doctor/manage-patients",
    element:<PatientsRecords/>
  },
  {
    path:"/doctor/login",
    element:<DoctorLogin/>
  },
  {
    path:"/doctor/update-appointment",
    element:<UpdateAppointment/>
  },

  // Admin Routes 
  {
    path:"/admin/dashboard",
    element:<AdminDashboard/>

  },
  {
    path:"/admin/view-doctors",
    element:<DoctorTableUI/>

  },
  {
    path:"/admin/add-doctor",
    element:<AddDoctor/>

  }

]);

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
