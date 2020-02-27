import React, { Component } from 'react'
import './index.css'
import { Media } from 'reactstrap'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline).sort((a, b) => {
      return +a - +b
    })
    return (
      <div>
      <br />
        {
          events.map((event, i) => {
            var dateNumber = timeline[event].date
            var date
            if (dateNumber < 0) {
              date = Math.abs(timeline[event].date)
              date = date.toString()
              date = date + " " + this.props.lessThanYearZero
            } else if (dateNumber >= 0) {
              date = Math.abs(timeline[event].date)
              date = date.toString()
              date = date + " " + this.props.greaterThanYearZero
            }
            return (
              <center key={i}>
                <Media>
                  <Media body>
                    <Media heading>
                      {date}
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
      </div>
    )
  }
}

export default Time
