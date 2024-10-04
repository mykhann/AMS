import Router from "express"
import { cancelAppointment, getAllAppointments, getAppointmentById, getAppointments, getDoctorAppointments, registerAppointment, updateAppointment } from "../controllers/appointment.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.middleware.js";
import { isDoctor } from "../middlewares/isDoctor.middleware.js";
const router= new Router();

// USER ROUTES 
router.route("/register-appointment/:id").post(isAuthenticated,registerAppointment)
router.route("/get").get(isAuthenticated,getAppointments)
router.route("/update/:id").patch(isAuthenticated,updateAppointment)
router.route("/cancel/:id").patch(isAuthenticated,cancelAppointment)

// Doctor 
router.route("/get/:id").get(isAuthenticated,getAppointmentById)
router.route("/doctor-appointments").get(isDoctor,getDoctorAppointments)
router.route("/admin-appointments").get(getAllAppointments)


export default router