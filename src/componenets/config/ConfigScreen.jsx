import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../../store/slices/data.slice.js'

export const ConfigScreen = ()=> {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pokedexData = {...useSelector(state=> state.pokedexData)}
  const [items, setItems] = useState(pokedexData.pokemonsPerPage)

  function logOut(){
    navigate("/")
    pokedexData.trainerName = ""
    dispatch(setData(pokedexData))
  }

  function activeSwitch(event){
    document.querySelector("body").classList.toggle("darck_mode")
    pokedexData.darckMode = !pokedexData.darckMode
    console.log(pokedexData)
    dispatch(setData(pokedexData))
  }

  function selectLimitPerPage(event){
    let count = parseInt(event.target.value)
    setItems(count)
    pokedexData.pokemonsPerPage = count
    dispatch(setData(pokedexData))
  }

  return (
    <div className="config">
      {pokedexData.trainerName && (<div onClick={logOut} className="config_logout" >
        <i className="fi fi-rr-exit"></i>
        <p>Log out</p>
      </div>)}
      <div className="config_card">
        <h2 className="config_card-title">Configuration</h2>
        <div className="config_card-items">
          <p>Pokemons per page {items}</p>
          <input onChange={selectLimitPerPage} type="range" value={items} min="4" max="20" step="2"  />
        </div>

        <div className="config_card-theme">
          <p >Theme</p>
          <div onClick={activeSwitch} className="card_theme-switch">
            <i className='bx bxs-moon'></i>
            <i className='bx bxs-sun' ></i>
            <div className="theme_switch-btn"></div>
          </div>
        </div>
      </div>
    </div>
  )
}