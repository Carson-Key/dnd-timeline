import React, { Component } from 'react'
import './App.css'
import Auth from './containers/Auth'

class App extends Component {
  render() {
    return (
      <Auth lessThanYearZero="EG" greaterThanYearZero="AK"/>
    )
  }
}

export default App
