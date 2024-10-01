import Home from "./components/layout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsList from "./components/Doctors/DoctorsList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./app.css";
import ProfilePage from "./components/profile/ProfilePage";
import AppointmentPage from "./components/Doctors/AppointmentPage";
import { NextUIProvider } from '@nextui-org/react'; 
import EditProfile from "./components/profile/EditProfile";

const router = createBrowserRouter([
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
