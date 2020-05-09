import React, { Component } from 'react'
import Time from '../Time'

class AuthTime extends Component {
  render() {
    const { timeline, lessThanYearZero, greaterThanYearZero } = this.props

    return (
      <div>
        <Time
          timeline={timeline}
          lessThanYearZero={lessThanYearZero}
          greaterThanYearZero={greaterThanYearZero}
        />
      </div>
    )
  }
}

export default AuthTime
