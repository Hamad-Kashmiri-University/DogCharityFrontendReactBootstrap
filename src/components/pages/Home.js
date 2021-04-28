import React, {Component, setState, useState } from 'react';
import { DataConsumer } from '../Context.js';
import Dogcard from '../Dogcard';
import axios from 'axios';

/**

* @class Unauthorized page component class

* @returns returns rendered page 

*/

class Home extends Component {
  state = {
    dogs: []
  };
  
/**

* @function component did mount for home

* @description sets state of dogs to dogs from api so they can be rendered

*/  
  componentDidMount() {
   axios.get("https://africa-spider-3000.codio-box.uk/api/dogs/")
  .then(res=> {
    console.log(res)
    this.setState({ dogs: res.data })
  })
    
  }
  
  render() {
    return (
      
      <div className="container" style={{ marginTop: "50px", marginBottom: '100px'}}>
      <div className="row">
         <div className="col lg-12 md-12 sm-12 ml-5">
      <h2 style={{ marginLeft: "-20px", width: "50%", float: "center", marginBottom: "-10px"}} className="display-4">Say Hi to Our Dogs</h2>
        </div>
      </div>
        <div className="row">
            { this.state.dogs.map(dog => {
      return <Dogcard  key={dog.id}
                       dogid={dog._id}
                       dogname={dog.name} 
                       dogtraits={dog.traits}
                       dogdescription={dog.description}
                       dogage={dog.age}
                       dogimage={dog.imageURL}
                       dogbreed={dog.breed}
                       doggender={dog.gender}/>
            }) 
            }

        </div>
      </div>
    );
  }
}



export default Home;