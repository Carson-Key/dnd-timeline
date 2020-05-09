import React, { Component } from 'react'
import './index.css'
import { Media } from 'reactstrap'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline).sort((a, b) => {
      return +parseInt(a) - +parseInt(b)
    })
    return (
      <div>
      <br />
        {
          events.map((year, i) => {
            var dateNumber = parseInt(year)
            var date
            if (dateNumber < 0) {
              date = Math.abs(dateNumber)
              date = date.toString()
              date = date + " " + this.props.lessThanYearZero
            } else if (dateNumber >= 0) {
              date = Math.abs(dateNumber)
              date = date.toString()
              date = date + " " + this.props.greaterThanYearZero
            }
            return timeline[year].map((event, j) => {
              return (
                <center key={j}>
                  <Media>
                    <Media body>
                      <Media heading>
                        {date}
                      </Media>
                      {event.description}
                    </Media>
                  </Media>
                  <br/>
                  <div className="line"></div>
                  <br/>
                </center>
              )
            })
          })
        }
      </div>
    )
  }
}

export default Time
