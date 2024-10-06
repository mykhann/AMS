import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedDoctorRoutes = ({ children }) => {
  const { singleDoctor } = useSelector((store) => store.doctors);
  const navigate = useNavigate();
  useEffect(() => {
    
    if ( singleDoctor !== "doctor") {
      navigate("/doctor/login");
    }
  },[]);
  return <>{children}</>;
};

export default ProtectedDoctorRoutes;
