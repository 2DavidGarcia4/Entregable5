import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Pokemon from './componenets/pokedex/Pokemon.jsx'
import HomeScreen from './componenets/home/HomeScreen.jsx'
import ProtectedRoutes from './componenets/ProtectedRoutes.jsx'
import PokedexScreen from './componenets/pokedex/PokedexScreen.jsx'
import { PokedexHeader } from './componenets/pokedex/PokedexHeader'
import useFetch from './hooks/useFetch.js'
import { setPokemons, getPokemons } from './store/slices/pokemons.slice.js'

function App() {
  const pokemons = useSelector(state=> state.pokemons)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"))
  }, [])

  if(false){
    let tipes = []
    let bueltas = 0
    let intervalo = setInterval(()=>{
      fetch(pokemons.results[bueltas].url).then(prom=> prom.json()).then(res=> {
        const tys = res.types.map(m=> m.type.name)
        tys.forEach(n=> {
          if(!tipes.some(s=> s==n)) tipes.push(n)
        })
      })

      bueltas++
      if(bueltas >= pokemons.results.length){
        console.log("End")
        console.log(tipes)
        clearInterval(intervalo)
      }
    }, 100)
    // pokemons?.results.forEach(({url})=> {
    //   fetch(url).then(prom=> prom.json()).then(res=> {
    //     const tys = res.types.map(m=> m.type.name)
    //     tys.forEach(n=> {
    //       if(!tipes.some(s=> s==n)) tipes.push(n)
    //     })
    //   })
    // })
  }

  // console.log(pokemons)  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route element={<ProtectedRoutes name={useSelector(state=> state.userName)} />} >
          <Route path='/pokedex' element={<PokedexHeader />} >
            <Route index element={<PokedexScreen pokemons={pokemons} />} />
            <Route path=':id' element={<Pokemon />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}


export default App