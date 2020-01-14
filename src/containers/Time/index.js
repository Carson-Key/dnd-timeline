import React, { Component } from 'react'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline)
    console.log(events)
    return events.map((event, i) => {
      return (
        <div>
          <p>Date: {timeline[event].date}</p>
          <p>Event: {timeline[event].description}</p>
        </div>
      )
    })
  }
}

export default Time
