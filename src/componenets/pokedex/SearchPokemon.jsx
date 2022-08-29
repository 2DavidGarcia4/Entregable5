import React, {useEffect, useState} from "react";
import Suggestion from "./Suggestion.jsx";

export default function SearchPokemon({pokemons}){
  const [suggestions, setSuggestions] = useState([])

  function change(event){
    const infoSearch = document.querySelector(".pokedex_info-search")
    const text = event.target.value.toLowerCase()
    if(text){
      const pokeFilter = pokemons.filter(f=> f.name.startsWith(text)) == 0 ? pokemons.filter(f=> f.name.includes(text)) : pokemons.filter(f=> f.name.startsWith(text))
      setSuggestions(pokeFilter.map(m=> {
        let indS = m.name.split(text)[0].length, indE = m.name.split(text).length >2 ? m.name.length - m.name.replace(text, "").length : m.name.length - m.name.split(text).filter((f,i)=> i>0).join("").length
        return {start: m.name.startsWith(text) ? "" : m.name.slice(0, indS), span: text, end: m.name.slice(indE, m.name.length), url: m.url}
      }))
      infoSearch.classList.add("search-active")
    }else infoSearch.classList.remove("search-active")
  }

  return (
    <form onSubmit={(ev)=> ev.preventDefault()} className="pokedex_info-search">
      <input onChange={change} id="pokemon" type="search" autoComplete="off"  placeholder="Search pokémon" />
      <div className="info_search-suggestion">
        {suggestions?.length != 0 && suggestions.map(sugg=> <Suggestion key={sugg.url} sugg={sugg} />)}
      </div>
      <label className="info_search-btn" htmlFor="pokemon">Search</label>
    </form>
  )
}