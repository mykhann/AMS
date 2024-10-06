import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setAppointmentsAdmin } from "../reduxStore/appointmentsSlice";
import { toast } from "react-toastify";

const useFetchAdminAppointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdminAppointments = async () => {
      try {
        const res = await axios.get(
          "https://healthcare-version-1.onrender.com/api/v1/appointments/admin-appointments",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          dispatch(setAppointmentsAdmin(res.data.appointments));
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchAdminAppointments();
  }, []);
};

export default useFetchAdminAppointments;
