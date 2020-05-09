import React, { Component } from 'react'
import './App.css'
import AuthTime from './containers/Auth'
import { timeline } from './utilities/timeline.js'

class App extends Component {
  render() {
    return (
      <div>
        <AuthTime timeline={timeline} lessThanYearZero="EG" greaterThanYearZero="AK"/>
      </div>
    )
  }
}

export default App
