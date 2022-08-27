import React from "react";
import InputHome from "./InputHome.jsx";
import imgTitle from "../../assets/logo.png"

export default function HomeScreen(){
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
        <div className="home_design-circle">
          <div className="design_circle-child"></div>
        </div>
      </div>
    </div>
  )
}