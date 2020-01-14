import React, { Component } from 'react'
import './App.css'
import Time from './containers/Time'
import { timeline } from './timeline.js'

class App extends Component {
  render() {
    return (
      <div>
        <Time timeline={timeline}/>
      </div>
    )
  }
}

export default App
