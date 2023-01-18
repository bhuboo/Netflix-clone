import React, { useEffect,useState } from 'react'
import Youtube from "react-youtube"
import "./Rowpost.css"
import {API_KEY, imageURL} from "../../constants/constants"
import axios from "../../Axios/axios";
function Rowpost(props) {
  const [Movies, setMovies] = useState([])
  const [UrlId, setUrlId] = useState(null)
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      // console.log(Response.data.results);
      setMovies(Response.data.results)
    })
    .catch(err=>{
      alert('Network Error')
    })
  });
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
      if(Response.data.results.length!==0){
        setUrlId(Response.data.results[`0`])
      }
      else{
        console.log('Array empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            Movies.map((obj)=>
            <div className={props.isSmall ? 'smallPoster':'poster'}>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageURL+obj.poster_path}`} alt="poster1" />
            <h1 className={props.large ? 'Documentitle' :'smalltitle'}>{obj.title}</h1>
            </div>
            )
          }
           
            
        </div>
        { UrlId &&
        <div className='youtube-main'>
          <div className="youtube-div">
           <button onClick={()=>setUrlId(null)} className='button-close' >Close</button>
           </div>   
           <Youtube videoId={UrlId.key} opts={opts}/> 
           </div> }
      
    </div>
  )
}

export default Rowpost