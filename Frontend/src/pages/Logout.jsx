import React, { useEffect } from 'react';
import axios from 'axios';
import backendUrl from '../config/config';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()
    useEffect(() => {
    async function logoutUser() {
      try {
        let res = await axios.delete("http://localhost:8081/api/auth/logout", { withCredentials: true });
        console.log(res.data);
        navigate("/")
      } catch (err) {
        console.log(err)
        window.alert(err.response?.data?.message || "An error occurred");
      }
    }
    logoutUser();
  }, []);

  return <div>Logout successfully!!</div>;
}
