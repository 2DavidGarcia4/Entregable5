import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import colors from "../../colors.json" 


export default function PokeCard({url}){
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(undefined)
  const [pokemonColor, setPokemonColor] = useState(false)
  const [color, setColor] = useState(undefined)

  useEffect(()=> {
    fetch(url).then(prom=> prom.json()).then(res=> setPokemon(res))
  }, [])

  useEffect(()=> {
    if(pokemon){
      if(pokemon.types.length > 1 && pokemon.types[0].type.name == "normal"){
        setPokemonColor(colors[pokemon.types[1].type.name])
      }else setPokemonColor(colors[pokemon.types[0].type.name])
    }
  }, [pokemon])

  function findParent(doc){
    doc.dataset.id ? navigate("/pokedex/"+doc.dataset.id) : findParent(doc.parentNode)
  }

  function click(event){
    document.querySelector(".jaja")
    findParent(event.target)
  }

  // console.log(pokemon?.types[0].type.name)
  
  return (
    <article onClick={click}  data-id={url?.match(/(\d+)/g).pop()} className="poke_card" style={{background: pokemonColor ? pokemonColor.border : ""}} >
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <div className="poke_card-background" style={{background: pokemonColor ? pokemonColor.background : ""}} ></div>
      <div className="poke_card-info">
        <div className="card_info-pokemon">
          <h3 style={{color: pokemonColor ? pokemonColor.color : ""}} >{pokemon?.name}</h3>
          <p>{pokemon?.types.map(m=> m.type.name.replace(m.type.name[0], m.type.name[0].toUpperCase())).join(" / ")}</p>
          <span>Tipo</span>
        </div>

        <div className="card_info-stats">
          <div className="card_info-stat">
            <span>hp</span>
            <p style={{color: pokemonColor ? pokemonColor.color : ""}}>{pokemon?.stats.find(f=> f.stat.name == "hp").base_stat}</p>
          </div>
          <div className="card_info-stat">
            <span>attack</span>
            <p style={{color: pokemonColor ? pokemonColor.color : ""}}>{pokemon?.stats.find(f=> f.stat.name == "attack").base_stat}</p>
          </div>
          <div className="card_info-stat">
            <span>defense</span>
            <p style={{color: pokemonColor ? pokemonColor.color : ""}}>{pokemon?.stats.find(f=> f.stat.name == "defense").base_stat}</p>
          </div>
          <div className="card_info-stat">
            <span>speed</span>
            <p style={{color: pokemonColor ? pokemonColor.color : ""}}>{pokemon?.stats.find(f=> f.stat.name == "speed").base_stat}</p>
          </div>
        </div>
      </div>
    </article>
  )
}