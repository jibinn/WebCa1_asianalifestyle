import express from "express";
import {registerController,loginController,testController,forgotPasswordController,updateProfileController
,orderStatusController,getAllOrdersController,getOrdersController} from "../controllers/authcontroller.js"
import {  requireSignIn ,isAdmin} from "../middleware/authMiddleware.js";
//router object
const router = express.Router();


//REGISTER || METHOD POST
router.post("/register", registerController);


//LOGIN
router.post("/login", loginController);



//FORGOT PASS
router.post("/forgot-password", forgotPasswordController); 
//test routes
router.get("/test", requireSignIn,isAdmin,testController);

router.get("/user-auth", requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

router.get("/admin-auth", requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;


//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
