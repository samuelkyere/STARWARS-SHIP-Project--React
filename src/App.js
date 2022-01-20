import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import StarshipCard from './components/StarshipCard';
import Home from './components/Home';
import About from './components/About';
// const star = {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.dev/api/planets/1/",
// 	"films": [
// 		"https://swapi.dev/api/films/2/",
// 		"https://swapi.dev/api/films/6/",
// 		"https://swapi.dev/api/films/3/",
// 		"https://swapi.dev/api/films/1/",
// 		"https://swapi.dev/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.dev/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.dev/api/vehicles/14/",
// 		"https://swapi.dev/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.dev/api/starships/12/",
// 		"https://swapi.dev/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.dev/api/people/1/"
// }
          

function App() {
  const [starships,setStarships] = useState([]);
  const swapiUrl = 'https://swapi.dev/api/starships';

 useEffect(()=> { 
  fetch(swapiUrl)
  .then((res)=>res.json())
  .then((data)=> {setStarships(data)})

 },[]);
 

 console.log(starships)
  
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Nav/> */}
    <Routes >
      <Route path='/' element={<starships starships={starships}/>}/> 
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      </Routes>
    <Header />
<div className="container">
      {starships.results?.map((starship,index) =>{
      return <StarshipCard starship={starship} key={index} />
})}  
  </div>    
     
    </div>
    </BrowserRouter>
  );
}

export default App;
