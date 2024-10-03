import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import { Verified } from 'lucide-react';


const SingleDoctorCard = () => {
    const {singleDoctor}=useSelector(store=>store.doctors)
  return (
    <div>
         {singleDoctor && (
          <Card className="max-w-[28rem] overflow-hidden shadow-lg mt-8">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={singleDoctor.avatar}
                alt="Doctor Avatar"
                className="w-60 h-60 object-cover mx-auto"
              />
            </CardHeader>
            <CardBody className='text-center'>
              <Typography variant="h4" color="blue-gray">
                <div className='flex justify-center'>{singleDoctor.name.toUpperCase()} <Verified className='ml-3 mt-1'/></div>
              </Typography>
              <Typography variant="h5" color="blue-gray">
                {singleDoctor.specialization} 
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Experience : <span className='font-bold text-red-900'>{singleDoctor.experience } years</span>
              </Typography>
             
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Appointment Fee : <span className='font-bold text-green-800'> {singleDoctor.fees } $ </span>
              </Typography>
           
            </CardBody>
          </Card>
        )}
    </div>
  )
}

export default SingleDoctorCard