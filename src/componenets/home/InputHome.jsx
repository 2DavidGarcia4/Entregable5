import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { setNameGlobal } from "../../store/slices/userName.slice.js";

export default function InputHome(){
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function submit(event){
    event.preventDefault()
    if(document.querySelector(".form-btn").classList.contains("active")){
      // console.log(event.target.name.value.toLowerCase())
      dispatch(setNameGlobal(event.target.name.value))
      navigate('/pokedex')
    }
  }

  function change(event){
    console.log(event.target.value)
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