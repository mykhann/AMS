import Home from "./components/layout/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DoctorsList from "./components/Doctors/DoctorsList";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import store from "./reduxStore/store";

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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
