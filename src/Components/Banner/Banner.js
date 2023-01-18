import React, { useEffect, useState } from 'react'
import {API_KEY,imageURL} from "../../constants/constants"
import axios from '../../Axios/axios'
import "./Banner.css"
function Banner() {
  const [Movie, setMovie] = useState()
  const [count,setcount] = useState(0)
  console.log(count)

  useEffect(() => {
    const interval = setInterval(() => {
      if(count === 19){
            setcount(0)
         }
          else{
            setcount(count + 1)
          } 
    }, 8000);
    return () => clearInterval(interval);
  }, [count]);

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results.length);
      setMovie(Response.data.results[`${count}`])

    })
  })
  
  return (
    <div
    style={{backgroundImage:`url(${Movie ? imageURL+Movie.backdrop_path : ""})`}} 
    className='banner'>
        <div className='content'>
            <h1 className='title'>{Movie ? Movie.title :''}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className='description'>{Movie ? Movie.overview: ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner