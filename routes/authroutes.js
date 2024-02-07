import express from "express";
import {registerController} from "../controllers/authcontroller.js"

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

export default router;