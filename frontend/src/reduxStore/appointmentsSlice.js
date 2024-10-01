import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice=createSlice({
    name:"appointments",
    initialState:{
        appointments: [],
        singleAppointment:null
    },
reducers:{
    setAppointments:(state,action)=>{
        state.appointments = action.payload
    },
    setSingleAppointment:(state,action)=>{
        state.singleAppointment = action.payload
    }
}
})

export default appointmentsSlice.reducer;
export const {setAppointments,setSingleAppointment}=appointmentsSlice.actions