import React, { Component } from 'react'
import './App.css'
import Auth from './containers/Auth'

class App extends Component {
  render() {
    return (
      <div>
        <Auth lessThanYearZero="EG" greaterThanYearZero="AK"/>
      </div>
    )
  }
}

export default App
