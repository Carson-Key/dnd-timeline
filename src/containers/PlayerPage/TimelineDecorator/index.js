import React, { Component } from 'react'
import {
  Button,
  Container,
  Jumbotron
} from 'reactstrap';
import Time from '../../Time'
import { capitalizeFirstLetter } from '../../../utilities/capitalizeFirstLetter.js'
import { addPossesive } from '../../../utilities/addPossesive.js'

class TimelineDecorator extends Component {
  render() {
    return (
      <div>
        <Button
          className="exitButton"
          color="danger"
          onClick={this.props.exitTimeLine}
        >
          exit {capitalizeFirstLetter(this.props.characterName)}
        </Button>
        <Jumbotron fluid>
          <Container fluid>
            <center>
              <h1 className="display-3">
                {addPossesive(capitalizeFirstLetter(this.props.characterName))} Timeline
              </h1>
            </center>
          </Container>
        </Jumbotron>
        <Time
          timeline={this.props.playerObject.characters[this.props.characterName].timeline}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      </div>
    )
  }
}

export default TimelineDecorator
