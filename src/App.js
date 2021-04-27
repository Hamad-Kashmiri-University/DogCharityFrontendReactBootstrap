import React, { Component, useContext } from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

//router
import { Switch, Route } from 'react-router-dom';

//layout components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

//pages
import Home from './components/pages/Home';
import DogDetails from './components/pages/DogDetails';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import Shelters from './components/pages/Shelters';
import Unauthorized from './components/pages/Unauthorized';
import Edit from './components/pages/Edit';
import Search from './components/pages/Search';
import Favourites from './components/pages/Favourites';


//context
import AuthContext from './context/AuthContext';

function App() {
  
    const {loggedIn} = useContext(AuthContext);
  console.log(loggedIn)
      return (
          <div>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shelters" component={Shelters}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/dogdetails" component={DogDetails}/>
          <Route path="/not-authorized" component={Unauthorized}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/favourites" component={Favourites}/>
          <Route path="/search" component={Search}/>
          { loggedIn === true &&  <> <Route path="/add-dog" component={Profile}/></>}  
          <Route component={NotFound}/>

          </Switch>
          <Footer />          </div>
  
  );

}

export default App;