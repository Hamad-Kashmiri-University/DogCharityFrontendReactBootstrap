import React, {Component} from 'react';
import { DataConsumer } from '../Context.js';
import Dogcard from '../Dogcard';


class Home extends Component {
  render() {
    return (
      
      <div className="container" style={{ marginTop: "50px"}}>
      <div className="row">
         <div className="col lg-12 md-12 sm-12 ml-5">
      <h2 style={{ marginLeft: "-20px", width: "50%", float: "center", marginBottom: "-10px"}} className="display-4">Say Hi to Our Dogs</h2>
        </div>
      </div>
        <div className="row">
            <DataConsumer>
            {data => {
             return data.dogData.map(item => {
      return <Dogcard key={item.id} item={item} />
      }) 
            }}
            </DataConsumer>
        </div>
      </div>
    );
  }
}



export default Home;