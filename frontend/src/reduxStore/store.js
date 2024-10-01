import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import appointmentsSlice from "./appointmentsSlice";
import doctorsSlice from "./doctorsSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        appointments:appointmentsSlice,
        doctors:doctorsSlice
    }
})

export default store