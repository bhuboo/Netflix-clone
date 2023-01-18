import React  from "react";
import "./app.css"
// import  axios  from "axios";
import {original,action,trending,HorrorMovies, ComedyMovies, RomanceMovies, Documentaries} from "./Url/Url"
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/NavBar/Navbar";
import Rowpost from "./Components/Rowpost/Rowpost";
function App() {
  // const [state,setstate]= useState([])
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={original} title='Netflix Originals'/>
      <Rowpost url={trending} title='Trending' isSmall />
      <Rowpost url={action} title='Actions'  />
      <Rowpost url={HorrorMovies} title='Horror Movies' isSmall />
      <Rowpost url={ComedyMovies} title='Comedy Movies'  />
      <Rowpost url={RomanceMovies} title='Romance Movies'  isSmall />
      <Rowpost url={Documentaries} large title='Documentaries Movies'  isSmall  />
      <Banner />
      {/* <div className="axios-demo">
        <button onClick={()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
            console.log(Response.data);
            setstate(Response.data)
          })
        }}>CLick me</button>
        {
          state.map((obj, index)=>{
            return(
              <div>
                <h1>{index + 1}</h1>
                <h1>{obj.title}</h1>
                <h4>{obj.body}</h4>
              </div>
            )
          })
        }
      </div>*/}
    </div> 
  );
}

export default App;
