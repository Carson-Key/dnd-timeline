import React, { Component, Fragment } from 'react'
import './index.css'
import { Media } from 'reactstrap'
import { sortEvents } from '../../utilities/sortEvents.js'
import { decideDateSuffix } from '../../utilities/decideDateSuffix.js'

class Time extends Component {
  render() {
    const { timeline } = this.props
    const events = sortEvents(timeline)
    return (
      <Fragment>
        <br />
        {
          events.map((year, i) => {
            const date = decideDateSuffix(
              parseInt(year),
              this.props.lessThanYearZero,
              this.props.greaterThanYearZero
            )
            return timeline[year].map((event, j) => {
              return (
                <Fragment key={j}>
                  <center>
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
                </Fragment>
              )
            })
          })
        }
      </Fragment>
    )
  }
}

export default Time
