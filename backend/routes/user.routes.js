import { Login, Logout, register, updateUser } from "../controllers/user.controller.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.middleware.js";

const router=new Router();

router.route("/register").post(upload.single("avatar"),register)
router.route("/login").post(Login)
router.route("/logout").post(isAuthenticated,Logout)
router.route("/update-user").put(upload.single("avatar"),isAuthenticated,updateUser)



export default router;