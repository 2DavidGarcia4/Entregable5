import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function SelectPage({page, setPage, pokemons}){
  const [indButtons, setIndButtons] = useState({start: 0, end: 7})
  const [btnSelected, setBtnSelected] = useState(undefined)
  const [nextIndex, setNextIndex] = useState(undefined)
  // const [buttons, setButtons] = useState([])
  const limitPage = useSelector(state=> state.limitPage)
  // console.log(limitPage)
  // console.log(pokemons)
  let buttons = []

  // useEffect(()=> {
  //   let btns = []
  //   if(pokemons > limitPage){
  //     console.log(nextMore)
  //     for(let i=0; i<Math.ceil(pokemons/limitPage); i++){
  //       if(i==0 && (!btnSelected || nextMore)){
  //         console.log("hi")
  //         btns.push(<button onClick={clickBtn} key={i} className="pokedex_pagination-btn pagination_btn-active" data-id={i+1} >{i+1}</button>)
  //         // if(nextMore) setNextMore(false)
  //         continue
  //       }
    
  //       btns.push(<button onClick={clickBtn} key={i} className="pokedex_pagination-btn" data-id={i+1} >{i+1}</button>)
  //     }
  //     setButtons(btns)
  //   }
  // }, [indButtons])

  if(pokemons > limitPage){
    // console.log(nextMore)
    for(let i=0; i<Math.ceil(pokemons/limitPage); i++){
      if(i==0 && btnSelected){
        buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn pagination_btn-active" data-id={i+1} >{i+1}</button>)
        continue
      }

      if(i == nextIndex || indButtons.start == i){
        buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn pagination_btn-active" data-id={i+1} >{i+1}</button>)
        continue
      }
  
      buttons.push(<button onClick={clickBtn} key={i+1} className="pokedex_pagination-btn" data-id={i+1} >{i+1}</button>)
    }
  }

  function clickBtn(event){
    const btId = event.target.dataset.id
    setNextIndex(btId)
    if(btnSelected){
      btnSelected.classList.remove("pagination_btn-active")
    }else{  
      [...document.querySelectorAll(".pagination_btn-active")][0].classList.remove("pagination_btn-active")
    }
    
    if(btId==indButtons.start+1 && indButtons.start!=0){
      if(btId==3){
        setIndButtons({start: indButtons.start-2, end: indButtons.end-1}) 
      }else if(indButtons.end-indButtons.start == 7){
        setIndButtons({start: indButtons.start-1, end: indButtons.end-2}) 
      }else{
        setIndButtons({start: indButtons.start-1, end: indButtons.end-1})
      }
    }

    if(btId==indButtons.end && indButtons.start!=buttons.length){
      if(btId==buttons.length-2){
        setIndButtons({start: indButtons.start+1, end: indButtons.end+2})
      }else if(indButtons.end-indButtons.start == 7){
        setIndButtons({start: indButtons.start+2, end: indButtons.end+1})
      }else{
        setIndButtons({start: indButtons.start+1, end: indButtons.end+1})
      }
    }
    
    setBtnSelected(event.target)
    event.target.classList.add("pagination_btn-active")
    console.log(event.target.classList)
  }

  function moreNext(){
    if(indButtons.end+6 >= buttons.length-2 && indButtons.end+6 < buttons.length+1){
      console.log(1)
      setIndButtons({start: indButtons.start+6, end: indButtons.end+7})
    }else if(indButtons.end+6 > buttons.length){
      console.log(2)
      console.log(buttons.length-7)
      setIndButtons({start: buttons.length-7, end: buttons.length})
    }else if(indButtons.end-indButtons.start == 7){
      console.log(3)
      setIndButtons({start: indButtons.start+7, end: indButtons.end+6})
    }else{
      console.log(5)
      setIndButtons({start: indButtons.start+6, end: indButtons.end+6})
    }
  }

  function morePrevious(){
    if(indButtons.start-6 <= 1){
      // console.log(1)
      setIndButtons({start: indButtons.start-7, end: indButtons.end-6})
    }else if(indButtons.end-indButtons.start == 7){
      // console.log(2)
      setIndButtons({start: indButtons.start-6, end: indButtons.end-7})
    }else{
      // console.log(3)
      setIndButtons({start: indButtons.start-6, end: indButtons.end-6})
    }
  }

  // console.log(buttons)

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