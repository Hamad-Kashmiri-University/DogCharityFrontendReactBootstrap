import React, {Component} from 'react';
import { DataConsumer } from '../Context.js';
import Dogcard from '../Dogcard';


class Home extends Component {
  render() {
    return (
      
      <div className="container" style={{ marginTop: "50px"}}>
      <h4 style={{ margin: "auto", width: "50%", float: "center", marginBottom: "-10px"}}> Our Dogs</h4>
        <div className="row">
            <DataConsumer>
            {data => {
             return data.dogs.map(item => {
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