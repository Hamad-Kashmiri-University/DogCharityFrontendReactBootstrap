import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './components/Context';
import { AuthProvider } from './context/AuthContext';
//import login context above

axios.defaults.withCredentials = true;

//auth provider lets routes know if logged in or not
ReactDOM.render(
  <AuthProvider>
  <DataProvider>  
  <Router>
    <App />
  </Router>
  </DataProvider>
  </AuthProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
