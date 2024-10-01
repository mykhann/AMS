import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";


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
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                {singleDoctor.name}
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                {`${singleDoctor.experience} years experience`}
              </Typography>
              <Typography variant="h4" color="blue-gray">
                {singleDoctor.specialization}
              </Typography>
            </CardBody>
          </Card>
        )}
    </div>
  )
}

export default SingleDoctorCard