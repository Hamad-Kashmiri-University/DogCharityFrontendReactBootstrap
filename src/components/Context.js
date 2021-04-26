import React, { Component } from 'react';
import { dogData, shelterData, favouriteData } from '../appdata'
const DataContext = React.createContext();
//provider gets data
//consumer consumes and uses that data

class DataProvider extends Component {
  state = {
    dogs: dogData,
    shelters: shelterData,
    favourites: favouriteData
  }
  
  render() {
    return (
      <DataContext.Provider value={{
      dogs: this.state.dogs,
      shelters: this.state.shelters,
      favourites: this.state.favourites,
      dogName: this.state.dogName,
      breed: this.state.breed,
      imageURL: this.state.imageURL,
      traits: this.state.traits,
      description: this.state.desciption,
      age: this.state.age,
      }}>
      { this.props.children }
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer;
export { DataProvider, DataConsumer };