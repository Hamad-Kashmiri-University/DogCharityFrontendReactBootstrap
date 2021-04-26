import React, { Component } from 'react';
import { DataConsumer } from './Context.js';

class Dogcard extends Component {
  render() {
    
  const {
    dogData
  } = this.props.item;
    return (
      <DataConsumer>
      {data => {

      }}
      </DataConsumer>
    )
  }
}


export default Dogcard;

