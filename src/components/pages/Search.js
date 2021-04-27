import React, {Component, useState, useEffect} from 'react';
import axios from 'axios'
import Dogcard from '../Dogcard'


export default function Search() {
  
const [dogs, setDogs] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('');

useEffect(() => {
getDogs()
}, [query]);

const getDogs = async () => {
const res = await axios.get(`https://africa-spider-3000.codio-box.uk/api/dogs/search?breed=${query}`)
console.log(res);
setDogs(res.data)

}


const updateSearch = e => {
// e is for event, so every time there is an event we run updatesearch for the search bar
    setSearch(e.target.value)
    console.log(search)
}

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
    // resets search bar to empty
}    
    return (
        <div className="container" style={{ marginTop: "50px"}}>
            <div className="row align-content-center">
          <h2 style={{ margin: "auto", width: "50%", float: "center", paddingBottom: '50px'}} className="display-4">Search Dogs by Breed</h2>
            </div>
        <div className="row align-content-center"> 
          <form className="form-group" onSubmit={getSearch} style={{margin: 'auto'}} >
            <div className="navbar-nav">
              <input className="form-control" onSubmit={getSearch} value={search} onChange={updateSearch} style = {{display:'inline-block'}} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn" style = {{marginLeft: '50px', width: '100px', background:'#F2AA4CFF', color: '#fff', marginTop: '5px'}} type="submit">Search</button>
            </div>          
          </form>
        </div>

        <div className="row">
          {dogs.map(dog => (
     <Dogcard key={dog.id}
              id={dog._id}
              name={dog.name} 
              traits={dog.traits}
              description={dog.description}
              age={dog.age}
              image={dog.imageURL}
              breed={dog.breed}
              gender={dog.gender}/> 
          ))}
          </div>
      </div>
)}












