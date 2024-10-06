import axios from 'axios'
import  {useEffect}  from 'react'
import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify'
import { setDoctorAppointments } from '../reduxStore/doctorsSlice'

const useFetchDoctorAppointments = () => {
    const dispatch=useDispatch()
  useEffect(()=>{
    const fetchDoctorAppointments=async()=>{
        try {
            const res=await axios.get("https://healthcare-version-1.onrender.com/api/v1/appointments/doctor-appointments",{withCredentials:true})
            if (res.data.success){
                dispatch(setDoctorAppointments(res.data.appointments))
                
            }
        } catch (error) {
            toast.error(error.response.data.message)
            
        }
    }
    fetchDoctorAppointments()

  },[])
}

export default useFetchDoctorAppointments