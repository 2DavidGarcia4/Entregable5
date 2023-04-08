import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { setData } from "../../store/slices/data.slice.js";

export default function InputHome(){
  const pokedexData = {...useSelector(state=> state.pokedexData)}
  const dispatch = useDispatch(), navigate = useNavigate()

  function submit(event){
    event.preventDefault()
    if(document.querySelector(".form-btn").classList.contains("active")){
      pokedexData.trainerName = event.target.name.value
      dispatch(setData(pokedexData))
      navigate('/pokedex')
    }
  }

  function change(event){
    const formBtn = document.querySelector(".form-btn").classList
    event.target.value ? formBtn.add("active") : formBtn.remove("active")
  }

  return (
    <form onSubmit={submit}>
      <input onChange={change} type="text" id="name" minLength={4} maxLength={40} placeholder="Tu nombre" />
      <button className="form-btn">Comenzar</button>
    </form>
  )
}