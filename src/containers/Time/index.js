import React, { Component } from 'react'
import './index.css'
import { Media } from 'reactstrap'
import { dateNumberToString } from '../../utilities/dateNumberToString.js'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = Object.keys(timeline)
    return (
      <div>
        <br />
        {
          events.map((event, i) => {
            var date = dateNumberToString(timeline[event].date, this.props.lessThanYearZero, this.props.greaterThanYearZero)

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
