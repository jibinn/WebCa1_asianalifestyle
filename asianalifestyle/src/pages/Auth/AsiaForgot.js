import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Login.css'; 

const AsiaForgot = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [answer, setAnswer,] = useState("");
  
    const navigate = useNavigate();
  
    // Inside handleSubmit function in your AsiaForgot component
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword: newpassword, // Ensure newPassword is sent
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  
    return (
        <div className="form-container ">
          <form onSubmit={handleSubmit}>
            <h4 className="title">RESET PASSWORD </h4>
  
            <div className="mb-3">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Enter Your NewPassword"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your fav sport"
                required
              />
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-primary">
             RESET
            </button>
            </div>
          
           
          </form>
        </div>
  
    );
  };

export default AsiaForgot
