import React, { useState, useEffect, useContext } from 'react';
import logo from '../../images/logo.png';
import home from '../../images/homeIcon.png';
import shelter from '../../images/shelterIcon.png';
import about from '../../images/aboutIcon.png';
import login from '../../images/login.png';
import search from '../../images/search.png';
import register from '../../images/register.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../context/AuthContext'

export default function Navbar() {
  
  const { loggedIn } = useContext(AuthContext); //destructure to get property  

  
  return (
    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#101820FF"}}>
        <a href="#" className="navbar-brand">
            <img src = {logo} 
    height="35" alt="CoolBrand" margintop="10px" />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="/" className="nav-item nav-link">Home&nbsp;<img src={home} height="16"/></a>
                <a href="/shelters" className="nav-item nav-link">Shelters&nbsp;<img src={shelter} height="20"/></a>
                <a href="/" className="nav-item nav-link">About&nbsp;<img src={about} height="15"/></a>
                <a href="/search" className="nav-item nav-link">Search&nbsp;<img src={search} height="16"/></a>
            </div>
            {
              loggedIn === false && (
              <div className="navbar-nav ml-auto">
                <a href="/register" className="nav-item nav-link">Register&nbsp;<img src={register} height="15"/></a>
                <a href="/login" className="nav-item nav-link">Login&nbsp;<img src={login} height="14"/></a>
              </div>
              )
            }
            {
              loggedIn === true && (
              <div className="navbar-nav ml-auto">
                <a href="/add-dog" className="nav-item nav-link">Add Dog&nbsp;<img src={register} height="15"/></a>
                <a href="/favourites" className="nav-item nav-link">Favourites&nbsp;<img src={login} height="14"/></a>
              </div>
              )
              
            }

        </div>
    </nav>
  )}