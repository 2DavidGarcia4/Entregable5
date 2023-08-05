import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndButtons } from "../../store/slices/indButtons.slice";

export default function SelectPage({setPage, pokemons}){
  const dispatch = useDispatch()
  const indButtons = useSelector(state=> state.indButtons)
  const limitPage = useSelector(state=> state.pokedexData).pokemonsPerPage
  const [btnSelected, setBtnSelected] = useState(undefined)
  let buttons = []

  if(pokemons > limitPage){
    for(let i=0; i<Math.ceil(pokemons/limitPage); i++){
      if(i==0 && !btnSelected){
        buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn pagination_btn-active" data-id={i+1} >{i+1}</button>)
        continue
      }

      if(!btnSelected && indButtons.start == i){
        buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn pagination_btn-active" data-id={i+1} >{i+1}</button>)
        continue
      }
  
      buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn" data-id={i+1} >{i+1}</button>)
    }
  }

  function clickBtn(event){
    const btnId = event.target.dataset.id
    if(btnSelected){
      btnSelected.classList.remove("pagination_btn-active")
    }else{  
      [...document.querySelectorAll(".pagination_btn-active")][0].classList.remove("pagination_btn-active")
    }

    setPage({start: limitPage * parseInt(btnId) - limitPage, end: limitPage * parseInt(btnId)})
    
    if(btnId==indButtons.start+1 || btnId==indButtons.end){
      dispatch(setIndButtons({
        start: btnId == indButtons.start+1 ? indButtons.start-1 <= 1 ? 0 : indButtons.start-1 : indButtons.end+1 >= buttons.length-2 ? buttons.length-2 : indButtons.end-5, 
        end: btnId == indButtons.start+1 ? indButtons.start-1 <= 1 ? 7 : indButtons.start+5 : indButtons.end+1 >= buttons.length-2 ? buttons.length : indButtons.end+1
      })) 
    }
    
    setBtnSelected(event.target)
    event.target.classList.add("pagination_btn-active")
  }

  function moreNext(){
    setBtnSelected(undefined)
    let start = indButtons.end+6 >= buttons.length-2 ? buttons.length-7 : indButtons.start+6
    setPage({start: limitPage * (parseInt(start)+1) - limitPage, end: limitPage * (parseInt(start)+1)})
    dispatch(setIndButtons({start: start, end: indButtons.end+6 >= buttons.length-2 ? buttons.length : indButtons.end+6}))
  }

  function morePrevious(){
    setBtnSelected(undefined)
    let start = indButtons.start-6 <= 1 ? 0 : indButtons.start-6
    setPage({start: limitPage * (parseInt(start)+1) - limitPage, end: limitPage * (parseInt(start)+1)})
    dispatch(setIndButtons({start: indButtons.start-6 <= 1 ? 0 : indButtons.start-6, end: indButtons.start-6 <= 1 ? 7 : indButtons.start}))
  }


  return (
    <section className="pokedex_pagination" >
      {indButtons.start>0 && (<button onClick={morePrevious} className="pokedex_pagination-btn pagination_btn-next" >
        <i className="fi fi-rr-angle-double-left"></i>
      </button>)}
      {buttons.slice(indButtons.start, indButtons.end)}
      {indButtons.end<buttons.length && (<button onClick={moreNext} className="pokedex_pagination-btn pagination_btn-next" >
        <i className="fi fi-rr-angle-double-right"></i>
      </button>)}
    </section>
  )
}