import React, { Component } from 'react';
import { dogData, shelterData, favouriteData } from '../appdata'
const DataContext = React.createContext();
//provider gets data
//consumer consumes and uses that data

class DataProvider extends Component {
  state = {
    dogData: dogData,
    shelterData: shelterData,
    favouriteData: favouriteData
  }
  
//   getDogData = id => {
//     const item = this.state.dogData(item => item.id ===id);
//     return item;
//   }.
  
//   dogDataHandler = id => {
//     const item = this.getDogData(id);
//     this.setState(() => {
//       return {
//         dogData: item;
//       }
//     })
//   };
  
  render() {
    return (
      <DataContext.Provider value={{
      dogData: this.state.dogData,
      shelterData: this.state.shelters,
      favouriteData: this.state.favourites,
      dogName: this.state.dogName,
      breed: this.state.breed,
      imageURL: this.state.imageURL,
      traits: this.state.traits,
      description: this.state.desciption,
      age: this.state.age,
      _id: this.state.id,
      data: this.state.date
      }}>
      { this.props.children }
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer;
export { DataProvider, DataConsumer };