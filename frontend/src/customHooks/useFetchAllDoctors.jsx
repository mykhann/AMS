import axios from 'axios'
import React, { useEffect } from 'react'
import { setDoctors } from '../reduxStore/doctorsSlice'
import { useDispatch } from 'react-redux'

const useFetchAllDoctors = () => {
    const dispatch=useDispatch()
  useEffect(()=>{
    const fetchDoctors=async()=>{
        const res=await axios.get("http://localhost:8000/api/v1/doctors/get-all")
        if(res.data.success){
            dispatch(setDoctors(res.data.doctors))
        }
    }
    fetchDoctors()

  },[])
}

export default useFetchAllDoctors