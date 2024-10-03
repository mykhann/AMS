import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AddDoctor = () => {
  const dispatch=useDispatch()
  const navigate= useNavigate()

  const [input,setInput]=useState({
    name: "",
    email: "",
    password: "",
    fees: "",
    experience:"",
    specialization: "",
    avatar:null
  })

  const onChangeFileHandler=(e)=>{

  }
  const onChangeInputHandler=(e)=>{
    
  }
  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen flex flex-col md:flex-row">
      
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">ADD A NEW DOCTOR</h2>

          <form className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              
              
              {/*  Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  onChange={onChangeInputHandler}
                  name='name'
                  id="name"
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder=" Doctor's name"
                  required
                />
              </div>
           
           
           
              {/* Email  */}
              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  onChange={onChangeInputHandler}
                  name='email'
                  className="w-full p-3 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Doctor's Email"
                  required
                />
              </div>




              {/* Experience  */}
              <div className="flex flex-col">
                <input
                  type="number"
                  onChange={onChangeInputHandler}
                  id="experience"
                  name='experience'
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Experience"
                  required
                />
              </div>


              {/* specialization  */}
              <div className="flex flex-col">
                <input
                  type="text"
                  onChange={onChangeInputHandler}
                
                  id="specialization"
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Specialization"
                  required
                />
              </div>
              {/* fees  */}
              <div className="flex flex-col">
                <input
                  type="number"
                  id="fees"
                  onChange={onChangeInputHandler}
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Doctor's fees"
                  required
                />
              </div>

              {/* Password  */}
              <div className="flex flex-col">
                <input
                  type="text"
                  onChange={onChangeInputHandler}
                  id="password"
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Doctor's Password"
                  required
                />
              </div>

              {/* Product Description */}
              <div className="col-span-2 flex flex-col">
                <textarea
                  id="description"
                  rows="2"
                  onChange={onChangeInputHandler}
                  className="w-full p-3  text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                  placeholder="Doctor's Description"
                  required
                />
              </div>

           
             

              {/* Picture Upload */}
              <div className="col-span-2 flex flex-col">
                <label htmlFor="image" className="flex items-center justify-center p-3 bg-gray-800 rounded-full  text-white border border-gray-300  cursor-pointer hover:bg-cyan-950 transition duration-300 w-36 transform hover:scale-105">
                  Doctor's Picture
                  <input
                    type="file"
                    onChange={onChangeFileHandler}
                    id="avatar"
                    accept="image/*"
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-4 bg-black h-10 rounded-full text-white   transition duration-300 w-full transform hover:scale-105"
            >
              Register a new Doctor
            </Button>
            <Button
            onClick={()=>navigate(-1)}
              type="button"
              className="mt-4 bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition duration-300 w-full transform hover:scale-105"
            >
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddDoctor