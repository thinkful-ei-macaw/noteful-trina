import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  //header should link to main route
    return (
      <Link to='/'>
        <h1>Noteful</h1> 
      </Link>            
    );
}