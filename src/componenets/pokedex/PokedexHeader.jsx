import React from 'react'
import imgLogo from "../../assets/logo.png"
import { Outlet, useNavigate } from 'react-router-dom'

export const PokedexHeader = ()=> {
  const navigate = useNavigate()

  return (
    <>
      <div className="pokedex_header">
        <div className="pokedex_header-red">
          <img src={imgLogo} alt="" />
        </div>
        <div className="pokedex_header-black">
          <div onClick={()=> navigate("/config")} className="pokedex_header-circle">
            <i className='bx bxs-cog' title='Settings'></i>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}