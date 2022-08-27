import React, {useEffect, useState} from "react";
import Suggestion from "./Suggestion.jsx";

export default function SearchPokemon({pokemons}){
  const [suggestions, setSuggestions] = useState([])
  function change(event){
    const infoSearch = document.querySelector(".pokedex_info-search")
    const text = event.target.value.toLowerCase()
    if(text){
      const pokeFilter = pokemons.filter(f=> f.name.startsWith(text)) == 0 ? pokemons.filter(f=> f.name.includes(text)) : pokemons.filter(f=> f.name.startsWith(text))
      // console.log(pokeFilter)
      // "".slice
      // setSuggestions(pokeFilter)
      setSuggestions(pokeFilter.map(m=> {
        let indS = m.name.split(text)[0].length, indE = m.name.length - m.name.split(text)[1].length
        return {start: m.name.startsWith(text) ? "" : m.name.slice(0, indS), span: text, end: m.name.slice(indE, m.name.length), url: m.url}
      }))
      infoSearch.classList.add("search-active")
    }else{
      infoSearch.classList.remove("search-active")
    }
  }
  // console.log(suggestions)

  return (
    <form onSubmit={(ev)=> ev.preventDefault()} className="pokedex_info-search">
      <input onChange={change} id="pokemon" type="text" autoComplete="off"  placeholder="Search pokémon" />
      <div className="info_search-suggestion">
        {suggestions?.length != 0 && suggestions.map(sugg=> <Suggestion key={sugg.url} sugg={sugg} />)}
        {/* {suggestions?.length != 0 && suggestions.map(m=> <p key={m.url}>{m.name}</p>)} */}
      </div>
      <label className="info_search-btn" htmlFor="pokemon">Search</label>
    </form>
  )
}