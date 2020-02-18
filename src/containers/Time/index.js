import React, { Component } from 'react'
import './index.css'
import { Media } from 'reactstrap'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline)
    return events.map((event, i) => {
      return (
        <center key={i}>
          <Media>
            <Media body>
              <Media heading>
                {timeline[event].date}
              </Media>
              {timeline[event].description}
            </Media>
          </Media>
          <br/>
          <div className="line"></div>
          <br/>
        </center>
      )
    })
  }
}

export default Time
