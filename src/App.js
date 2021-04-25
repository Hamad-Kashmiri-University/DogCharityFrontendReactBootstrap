import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
class App extends Component {
  render() {
      return (
        <div>
          <Navbar />
        <br />
          <Footer />
        </div>
  
  );
}

}

export default App;