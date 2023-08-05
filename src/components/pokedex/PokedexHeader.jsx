import React from 'react'
import imgLogo from "../../assets/logo.png"
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const PokedexHeader = ()=> {
  const navigate = useNavigate()

  return (
    <>
      <div className="pokedex_header">
        <div className="pokedex_header-red">
          <Link to={'/pokedex'}>
            <img src={imgLogo} alt="pokedex" />
          </Link>
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