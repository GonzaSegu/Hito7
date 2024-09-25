import React from 'react'
import '../assets/css/Profile.css'
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

export default function Profile() {
  const { authEmail, logOut } = useContext(GlobalContext);
  return (
    <div className="profile">
        <button type="button" className="btn btn-success">{authEmail.email}</button>
        <button onClick={()=>{logOut()}} ytype="button" className="btn btn-primary">
          Cerrar Sesión
        </button>
    </div>
    
  )
}
