import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice=createSlice({
    name:"appointments",
    initialState:{
        appointments: [],
    },
reducers:{
    setAppointments:(state,action)=>{
        state.appointments = action.payload
    }
}
})

export default appointmentsSlice.reducer;
export const {setAppointments}=appointmentsSlice.actions