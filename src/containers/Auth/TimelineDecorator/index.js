import React, { Component } from 'react'
import {
  Button,
  Container,
  Jumbotron
} from 'reactstrap';
import Time from '../../Time'
import { capitalizeFirstLetter } from '../../../utilities/capitalizeFirstLetter.js'

class TimelineDecorator extends Component {
  render() {
    return (
      <div>
        <Button
          className="exitButton"
          color="danger"
          onClick={this.props.exitTimeLine}
        >
          exit {capitalizeFirstLetter(this.props.playerName)}
        </Button>
        <Jumbotron fluid>
          <Container fluid>
            <center><h1 className="display-3">{capitalizeFirstLetter(this.props.playerName)}'s Timeline</h1></center>
          </Container>
        </Jumbotron>
        <Time
          timeline={this.props.newTimeLine}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      </div>
    )
  }
}

export default TimelineDecorator