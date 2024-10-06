
import Home from "./components/layout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsList from "./components/Doctors/DoctorsList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'; 
import store from "./reduxStore/store";
import { persistor } from "./reduxStore/store"; 
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
import AdminAppointments from "./components/Admin Dashboard/AdminAppointments";
import DoctorInfo from "./components/Admin Dashboard/DoctorInfo";
import AboutPage from "./components/layout/AboutPage";
import ProtectedAdminRoutes from "./components/Admin Dashboard/ProtectedAdminRoutes";
import ProtectedDoctorRoutes from "./components/Doctor's Dashboard/ProtectedDoctorRoutes";
import AppointmentHistory from "./components/profile/AppointmentHistory";

const router = createBrowserRouter([
  // User profile
  { path: "/", element: <Home /> },
  { path: "/doctors", element: <DoctorsList /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/edit-profile", element: <EditProfile /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/appointment/:id", element: <AppointmentPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/profile/appointments", element: <AppointmentHistory /> },

  // Doctor profile
  { path: "/doctor/dashboard", element: <ProtectedDoctorRoutes><Dashboard /></ProtectedDoctorRoutes> },
  { path: "/doctor/view-appointments", element: <ProtectedDoctorRoutes><DoctorAppointments /></ProtectedDoctorRoutes> },
  { path: "/doctor/manage-patients", element: <ProtectedDoctorRoutes><PatientsRecords /></ProtectedDoctorRoutes> },
  { path: "/doctor/login", element: <ProtectedDoctorRoutes><DoctorLogin /></ProtectedDoctorRoutes> },
  { path: "/doctor/update-appointment/:id", element: <ProtectedDoctorRoutes><UpdateAppointment /></ProtectedDoctorRoutes> },

  // Admin Routes
  { path: "/admin/dashboard", element: <ProtectedAdminRoutes><AdminDashboard /></ProtectedAdminRoutes> },
  { path: "/admin/view-doctors", element: <ProtectedAdminRoutes><DoctorTableUI /></ProtectedAdminRoutes> },
  { path: "/admin/add-doctor", element: <ProtectedAdminRoutes><AddDoctor /></ProtectedAdminRoutes> },
  { path: "/admin/view-appointments", element: <ProtectedAdminRoutes><AdminAppointments /></ProtectedAdminRoutes> },
  { path: "/admin/doctor-info/:id", element: <ProtectedAdminRoutes><DoctorInfo /></ProtectedAdminRoutes> },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <NextUIProvider>
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" autoClose={700} pauseOnHover />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
