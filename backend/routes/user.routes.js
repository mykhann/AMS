import { register } from "../controllers/user.controller.js";
import { Router } from "express";
const router=new Router();

router.route("/register").post(register)




export default router;