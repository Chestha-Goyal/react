import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// function base me directlty return krte hai and class based me render me return krte hai

export default class App extends Component {
  render() {
    // render ik life cycle method hai jab react ik component ko run krti hai to kuch series of method run hote hai
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}