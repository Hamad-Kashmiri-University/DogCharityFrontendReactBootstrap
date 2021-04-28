import React, {Component, setState, useState } from 'react';
import { DataConsumer } from '../Context.js';
import FavouriteCard from '../FavouriteCard';
import axios from 'axios';

/**

* @class Unauthorized page component class

* @returns returns rendered page 

*/

class Favourites extends Component {
  state = {
    favourites: []
  };
  
/**

* @function component did mount for favourites

* @description sets state of favourites to favourites from api so they can be rendered

*/  
  componentDidMount() {
   const token = localStorage.getItem('jwtoken');
   axios.get("https://africa-spider-3000.codio-box.uk/api/favourites/", {
                                          headers: {
                                          'x-jwtoken': token }})
  .then(res=> {
    console.log(res)
    this.setState({ favourites: res.data })
  })
    
  }
  
  render() {
    return (
      
      <div className="container" style={{ marginTop: "50px", marginBottom: '100px'}}>
      <div className="row">
         <div className="col lg-12 md-12 sm-12 ml-5">
      <h2 style={{ marginLeft: "-20px", width: "50%", float: "center", marginBottom: "20px"}} className="display-4">Favourites</h2>
        </div>
      </div>
        <div className="row">
            { this.state.favourites.map(fav => {
      return <FavouriteCard  key={fav.id}
                       favId={fav._id}
                       favDogName={fav.dogID.name} 
                       favDogImage={fav.dogID.imageURL}/>
            }) 
            }

        </div>
      </div>
    );
  }
}


export default Favourites;