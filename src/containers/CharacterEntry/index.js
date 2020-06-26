import React, { Component, Fragment } from 'react'
import './index.css'
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import Character from '../Character'

class CharacterEntry extends Component {
  render() {
    const timelines = Object.keys(this.props.playerObject.timelines)
    return (
      <Container>
        <br />
        <Row>
          <Col>
            <center>
              <p>Pick a character</p>
              <br />
            </center>
            {
              timelines.map((timeline, i) => {
                return (
                  <Fragment key={i}>
                    <center>
                      <p>{this.props.playerObject.timelines[timeline].name}</p>
                      <br />
                    </center>
                    <Character
                      playerObject={this.props.playerObject}
                      characters={this.props.playerObject.timelines[timeline].characters}
                      timelineKey={timeline}
                      characterSelect={this.props.characterSelect}
                    />
                  </Fragment>
                )
              })
            }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CharacterEntry
