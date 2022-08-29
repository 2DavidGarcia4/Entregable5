import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import colors from "../../colors.json"
import useFetch from "../../hooks/useFetch.js";

export default function Pokemon(){
  const {id} = useParams()
  const pokemon = useFetch("https://pokeapi.co/api/v2/pokemon/"+id+"/")

  return (
    <div className="pokemon">
      <section className="pokemon_info">
        <section className="pokemon_info-background" style={{background: pokemon ? colors[pokemon.types[0].type.name].background : ""}}>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
        </section>

        <section className="pokemon_info-header">
          <h2 style={{color: pokemon ? colors[pokemon.types[0].type.name].color : ""}}>#{id}</h2>
          <div className="info_header-title">
            <div className="header_title-line"></div>
            <h1 className="title" style={{color: pokemon ? colors[pokemon.types[0].type.name].color : ""}}>{pokemon?.name}</h1>
            <div className="header_title-line"></div>
          </div>
          <div className="info_header-container">
            <p className="header_container-element">Weight <span>{pokemon?.weight}</span></p>
            <p className="header_container-element">Height <span>{pokemon?.height}</span></p>
          </div>
        </section>

        <section className="pokemon_info-body">
          <div className="info_body-types">
            <p>Type</p>
            <div className="body_types-container">
              {pokemon?.types.map(({type})=> <div className="body_types-element" key={type.url} style={{backgroundColor: colors[type.name].color}}><p>{type.name}</p></div>)}
            </div>
          </div>
          <div className="info_body-skills">
            <p>Skills</p>
            <div className="info_skills-container">
              {pokemon?.abilities.map(({ability})=> <div className="info_skills-element" key={ability.url}><p>{ability.name}</p></div>)}
            </div>
          </div>
        </section>
        
        <section className="pokemon_info-stats">
          <div className="info_stats-header">
            <h2>Stats</h2>
            <div className="stats_header-line"></div>
            <div className="stats_header-pokeball">
              <div className="header_pokeball-circle"></div>
            </div>
          </div>
          <div className="info_stats-container">
            {pokemon?.stats.map((stat, i)=> (
              <div key={stat.id} className="stats_container-element">
                <p>{i==0 ? stat.stat.name.toUpperCase() : stat.stat.name.replace(stat.stat.name[0], stat.stat.name[0].toUpperCase()).replace("-", " ")} <span>{stat.base_stat}/150</span></p>
                <div className="container_element-barr">
                  <div className="element_barr-color" style={{width: `${(stat.base_stat*100/150).toFixed(2)}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="pokemon_movements">
        <div className="pokemon_movements-header">
          <h2>Movements</h2>
          <div className="movements_header-line"></div>
          <div className="movements_header-pokeball">
            <div className="header_pokeball-circle"></div>
          </div>
        </div>
        <div className="pokemon_movements-container">
          {pokemon?.moves.map(({move})=> <p key={move.url} className="movements_container-element" >{move.name}</p>)}
        </div>
      </section>
    </div>
  )
}