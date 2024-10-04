import Router from "express"
import { createDoctor, deleteDoctor, getAllDoctors, getDoctoryById, LoginDoctor, updateDoctor } from "../controllers/doctor.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router= new Router();


router.route("/create-doctor").post(upload.single("avatar"),
    createDoctor)
router.route("/doctor-login").post(LoginDoctor)
    router.route("/delete/:id").delete(deleteDoctor)
    router.route("/get-doctor/:id").get(getDoctoryById)
    router.route("/update-doctor/:id").put(upload.single("avatar"),
        updateDoctor)
    router.route("/get-all").get(getAllDoctors)    
    
export default router;