import React from 'react'

const UpdateAppointment = () => {
  return (
    <div className="flex mt-32 flex-col md:flex-row">
  
    <div className="flex-grow p-6">
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md p-4 max-w-md mx-auto">
        <h1 className="text-3xl text-center text-white font-bold mb-6">
          Edit Appointment
        </h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Status */}
            <div>
              <select
                id="AppointmentStatus"
                name="AppointmentStatus "
                className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Update Status
                </option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="mt-4 bg-cyan-900 text-white px-4 py-2 rounded hover:bg-cyan-950 transition duration-200 w-full"
            >
              Update Appointment
            </button>
            <button
              type="button"
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 w-full"
            >
              Delete Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateAppointment