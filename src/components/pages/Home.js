import React, {Component} from 'react';
import { DataConsumer } from '../Context.js';


class Home extends Component {
  render() {
    return (
      <DataConsumer>
      {data => {
       return <h2>{ data }</h2>
      }}
      </DataConsumer>
    )
  }
}

export default Home;