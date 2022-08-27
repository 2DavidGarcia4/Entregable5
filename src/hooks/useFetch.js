import { useEffect, useState } from "react"

export default function useFetch(url){
  const [data, setData] = useState(undefined)
  useEffect(()=> {
    fetch(url).then(prom=> prom.json()).then(res=> setData(res)).catch(err=> console.error(err))
  }, [url])
  
  return data
}