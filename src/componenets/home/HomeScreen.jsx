import React from "react";
import InputHome from "./InputHome.jsx";
import imgTitle from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function HomeScreen(){
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home_header">
        <img src={imgTitle} alt="Logo" />
        <div className="home_header-text">
          <h1>¡Hola entrenador!</h1>
          <p>Para poder comenzar, dame tu nombre</p>
        </div>
        <InputHome />
      </div>

      <div className="home_design">
        <div className="home_design-red"></div>
        <div className="home_design-black"></div>
        <div onClick={()=> navigate("/config")} className="home_design-circle">
          <i className='bx bxs-cog' title='Settings'></i>
          <div className="design_circle-child"></div>
        </div>
      </div>
    </div>
  )
}