import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAppointmentsAdmin } from "../reduxStore/appointmentsSlice";
import { toast } from "react-toastify";

const useFetchAdminAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAdminAppointments = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/appointments/admin-appointments",
          {
            withCredentials: true,
          }
        );
        console.log(res.data)

        if (res.data.success) {
          dispatch(setAppointmentsAdmin(res.data.appointments));
          console.log("dispatching Appointments Admin",res.data.appointments)
        }
      } catch (error) {
        toast.error(error.response.data.message);
        console.log("error")
      }
    };
    fetchAdminAppointments();
  }, []);
};

export default useFetchAdminAppointments;
