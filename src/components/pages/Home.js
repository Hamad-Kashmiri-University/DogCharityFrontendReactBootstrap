import React, {Component, setState, useState } from 'react';
import { DataConsumer } from '../Context.js';
import Dogcard from '../Dogcard';
import axios from 'axios';

class Home extends Component {
  state = {
    dogs: []
  };
  componentDidMount() {
   axios.get("https://africa-spider-3000.codio-box.uk/api/dogs/")
  .then(res=> {
    console.log(res)
    this.setState({ dogs: res.data })
  })
    
  }
  
  render() {
    return (
      
      <div className="container" style={{ marginTop: "50px"}}>
      <div className="row">
         <div className="col lg-12 md-12 sm-12 ml-5">
      <h2 style={{ marginLeft: "-20px", width: "50%", float: "center", marginBottom: "-10px"}} className="display-4">Say Hi to Our Dogs</h2>
        </div>
      </div>
        <div className="row">
            { this.state.dogs.map(dog => {
      return <Dogcard  key={dog.id}
                       id={dog._id}
                       name={dog.name} 
                       traits={dog.traits}
                       description={dog.description}
                       age={dog.age}
                       image={dog.imageURL}
                       breed={dog.breed}
                       gender={dog.gender}/>
            }) 
            }

        </div>
      </div>
    );
  }
}



export default Home;