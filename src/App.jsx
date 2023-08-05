import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Pokemon from './components/pokedex/Pokemon.jsx'
import HomeScreen from './components/home/HomeScreen.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import PokedexScreen from './components/pokedex/PokedexScreen.jsx'
import { ConfigScreen } from './components/config/ConfigScreen.jsx'
import { PokedexHeader } from './components/pokedex/PokedexHeader.jsx'
import { getPokemons } from './store/slices/pokemons.slice.js'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pokemons = useSelector(state=> state.pokemons)
  const pokedexData = useSelector(state=> state.pokedexData)
  useEffect(()=> {
    dispatch(getPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300"))
    if(pokedexData.trainerName) navigate("/pokedex")
  }, [])

  if(useSelector(state=> state.pokedexData).darckMode) document.querySelector("body").classList.add("darck_mode")


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