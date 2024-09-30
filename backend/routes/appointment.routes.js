import Router from "express"
import { cancelAppointment, getAppointmentById, getAppointments, getDoctorAppointments, registerAppointment, updateAppointment } from "../controllers/appointment.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.middleware.js";
const router= new Router();

// USER ROUTES 
router.route("/register-appointment").post(isAuthenticated,registerAppointment)
router.route("/get").get(isAuthenticated,getAppointments)
router.route("/update/:id").patch(isAuthenticated,updateAppointment)
router.route("/cancel/:id").patch(isAuthenticated,cancelAppointment)

// Doctor 
router.route("/get/:id").get(isAuthenticated,getAppointmentById)
router.route("/doctor-appointments").get(isAuthenticated,getDoctorAppointments)


export default router