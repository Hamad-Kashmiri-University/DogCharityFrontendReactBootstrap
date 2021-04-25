import React from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#101820FF"}}>
        <a href="#" className="navbar-brand">
            <img src = {logo} 
    height="40" alt="CoolBrand" marginTop="10px" />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">Shelters</a>
                <a href="#" className="nav-item nav-link">Something</a>
            </div>
            <div className="navbar-nav ml-auto">
                <a href="#" className="nav-item nav-link">Register</a>
                <a href="#" className="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
  )
}