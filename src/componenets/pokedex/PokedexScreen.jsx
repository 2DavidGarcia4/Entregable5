import React, {useEffect, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import PokeCard from "./PokeCard.jsx"
import SearchPokemon from "./SearchPokemon.jsx"
import SelectType from "./SelectType.jsx"
import SelectPage from "./SelectPage.jsx"

export default function PokedexScreen({pokemons}){
  const [page, setPage] = useState({start: 0, end: useSelector(state=> state.pokedexData).pokemonsPerPage})
  function click(event){
    const infoSearch = document.querySelector(".pokedex_info-search")
    if(![...infoSearch.childNodes].some(s=> s==event.target) && infoSearch.classList.contains("search-active")){
      infoSearch.classList.remove("search-active")
    }
  }

  return (
    <div  className="pokedex">
      <div className="pokedex_info">
        <p className="pokedex_info-p"><span className="pokedex_info-spam">Bienvenido {useSelector(state=> state.pokedexData).trainerName},</span> aquí podrás encontrar tu pokemón favorito</p>
        <div className="pokedex_info-inputs">
          <SearchPokemon pokemons={pokemons?.map(m=> ({name: m.name, url: m.url}))} />
          <SelectType setPage={setPage} />
        </div>
      </div>

      <div className="pokedex-cards">
        {pokemons?.slice(page.start, page.end).map(pokemon=> <PokeCard key={pokemon.url} url={pokemon.url} />)}
      </div>

      <SelectPage setPage={setPage} pokemons={pokemons?.length} />
    </div>
  )
}