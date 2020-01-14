import React, { Component } from 'react'
import './index.css'
import { Media } from 'reactstrap'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline)
    return events.map((event, i) => {
      return (
        <div key={i}>
          <p className="line"></p>
          <Media>
            <Media body>
              <Media heading>
                {timeline[event].date}
              </Media>
              {timeline[event].description}
            </Media>
          </Media>
          <p className="line"></p>
          <br/>
        </div>
      )
    })
  }
}

export default Time
