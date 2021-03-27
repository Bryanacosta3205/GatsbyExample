import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

export default function Home() {
  const isMounted = useRef(true)
  const [state, setstate] = useState()

  useEffect(()=>{
    return ()=>{
      isMounted.current = false;
    }
  },[])

  useEffect(() => {
    getImage()
  }, [state])

  const getImage = async ()=>{
    
      try {
        const {url} = await fetch("https://source.unsplash.com/random/350x200");
        if (isMounted.current) {
          setstate(url)
        }
      } catch (error) {
        alert("An error has ocurred "+error.message)
      }
    
  }


  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      
      {state?<img src={state} alt="" />:"Loading image..."}
    </div>
  )
}
