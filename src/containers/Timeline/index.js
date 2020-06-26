import React, { Component, Fragment } from 'react'
import {
  Button,
  Container,
  Jumbotron
} from 'reactstrap';
import Time from '../Time'
import { capitalizeFirstLetter } from '../../utilities/capitalizeFirstLetter.js'
import { addPossesive } from '../../utilities/addPossesive.js'

class Timeline extends Component {
  render() {
    const playerObject = this.props.playerObject
    const timeline = playerObject.timelines[this.props.timelineName].characters[this.props.characterName].timeline

    return (
      <Fragment>
        <Button
          className="exitButton"
          id="timelineExitButton"
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
          timeline={timeline.events}
          lessThanYearZero={timeline.lessThanYearZero}
          greaterThanYearZero={timeline.greaterThanYearZero}
        />
      </Fragment>
    )
  }
}

export default Timeline
