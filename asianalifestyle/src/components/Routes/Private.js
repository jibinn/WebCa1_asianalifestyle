import axios from "axios";
import { useAuth } from "../../context/Auth";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./spinner"; // Ensure correct import path and component name

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(true);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('/api/v1/auth/user-auth');
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      } finally {
        setLoading(false);
      }
    };

    if (auth?.token) authCheck();
    else setLoading(false); // No token, no need to check authentication
  }, [auth?.token]);

  if (loading) return <Spinner />; // Show spinner while loading

  return ok ? <Outlet /> : <div>Authentication failed!</div>; // Replace with your fallback UI
}
