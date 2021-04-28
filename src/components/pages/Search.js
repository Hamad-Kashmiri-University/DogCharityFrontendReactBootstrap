import React, {Component, useState, useEffect} from 'react';
import axios from 'axios'
import Dogcard from '../Dogcard'

/**

* @function Search page functional component

* @returns returns rendered page 

*/

export default function Search() {

  
/**

* @constant state for dogs

*/

const [dogs, setDogs] = useState([]);
  
/**

* @constant state for search

*/
  
const [search, setSearch] = useState('');
  
    
/**

* @constant state for query

*/
const [query, setQuery] = useState('');

/**

* @function use effect

* @params { String } string for breed search

*/
  
useEffect(() => {
getDogs()
}, [query]);

/**

* @function get dogs

* @returns { object } returned dogs from search

*/  
  
const getDogs = async () => {
const res = await axios.get(`https://africa-spider-3000.codio-box.uk/api/dogs/search?breed=${query}`)
console.log(res);
setDogs(res.data)

}

/**

* @function update search

* @description updates search state everytime searchbar is typed into

*/  

const updateSearch = e => {
// e is for event, so every time there is an event we run updatesearch for the search bar
    setSearch(e.target.value)
    console.log(search)
}

/**

* @function get search

* @description sets search input to query and resets search

*/  

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
              dogid={dog._id}
              dogname={dog.name} 
              dogtraits={dog.traits}
              dogdescription={dog.description}
              dogage={dog.age}
              dogimage={dog.imageURL}
              dogbreed={dog.breed}
              doggender={dog.gender}/> 
          ))}
          </div>
      </div>
)}












