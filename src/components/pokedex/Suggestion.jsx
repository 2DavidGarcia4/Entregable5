import React from "react";
import {useNavigate} from "react-router-dom"

export default function Suggestion({sugg}){
  const navigate = useNavigate()
  function select(event){
    console.log(event.target.dataset.id)
    navigate("/pokedex/" + event.target.dataset.id)
  }

  return (
    <p onClick={select} className="search_suggestion-option" data-id={sugg.url.match(/(\d+)/g).pop()} >{sugg.start}<span>{sugg.span}</span>{sugg.end}</p>
  )
}