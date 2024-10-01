import { createSlice } from "@reduxjs/toolkit";

const doctorSlice=createSlice({
    name:"doctor",
    initialState:{
        doctors:[],
        singleDoctor:null,
    },
    reducers:{
        setDoctors:(state,action)=>{
            state.doctors=action.payload
        } ,
        setSingleDoctor:(state,action)=>{
            state.singleDoctor=action.payload
        }
    }
})

export default doctorSlice.reducer
export const {setDoctors,setSingleDoctor}=doctorSlice.actions