import React, { useEffect } from 'react'
import Hero from './Hero'
import Navbar from '../shared/Navbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const {user}=useSelector(store=>store.auth)
  const navigate=useNavigate()
  useEffect(()=>{
    if (user?.role ==="admin"){
      return navigate("/admin/dashboard")

    }

  },[])
  return (
    <div>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home