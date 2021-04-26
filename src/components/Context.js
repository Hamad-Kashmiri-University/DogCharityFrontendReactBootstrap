import React, { Component } from 'react';

const DataContext = React.createContext();
//provider gets data
//consumer consumes and uses that data

class DataProvider extends Component {
  render() {
    return (
      <DataContext.Provider value="data provider value">
      { this.props.children }
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer;
export { DataProvider, DataConsumer };