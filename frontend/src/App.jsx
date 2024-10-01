import Home from "./components/layout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsList from "./components/Doctors/DoctorsList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./app.css"
import ProfilePage from "./components/profile/ProfilePage";
import AppointmentPage from "./components/Doctors/AppointmentPage";


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
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
