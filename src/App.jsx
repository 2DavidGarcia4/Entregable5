import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import Pokemon from './componenets/pokedex/Pokemon.jsx'
import HomeScreen from './componenets/home/HomeScreen.jsx'
import ProtectedRoutes from './componenets/ProtectedRoutes.jsx'
import PokedexScreen from './componenets/pokedex/PokedexScreen.jsx'
import { ConfigScreen } from './componenets/config/ConfigScreen.jsx'
import { PokedexHeader } from './componenets/pokedex/PokedexHeader.jsx'
import { setPokemons, getPokemons } from './store/slices/pokemons.slice.js'

function App() {
  const pokedexData = useSelector(state=> state.pokedexData)
  const pokemons = useSelector(state=> state.pokemons)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300"))
  }, [])

  if(pokedexData.darckMode) document.querySelector("body").classList.add("darck_mode")

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/config' element={<ConfigScreen />} />
        <Route element={<ProtectedRoutes name={useSelector(state=> state.pokedexData).trainerName} />} >
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