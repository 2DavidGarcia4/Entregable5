import React from 'react'
import imgLogo from "../../assets/logo.png"
import { Outlet } from 'react-router-dom'

export const PokedexHeader = ()=> {
  return (
    <>
      <div className="pokedex_header">
        <div className="pokedex_header-red">
          <img src={imgLogo} alt="" />
        </div>
        <div className="pokedex_header-black">
          <div className="pokedex_header-circle"></div>
        </div>
      </div>
      <Outlet />
    </>
  )
}