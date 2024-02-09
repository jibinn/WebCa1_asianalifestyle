import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AsiaRegister.css'; // Import your CSS file
import axios from "axios";

import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AsiaRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

   // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
        <div className="register-container">
            <div className="register-content">
                <h1 className="register-heading">Register</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter your name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <small className="text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">phone number</label>
                        <input 
                            type="phonenumber" 
                            id="phone" 
                            placeholder="phone number" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            placeholder="Enter your address" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit" className="register-button">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AsiaRegister;

