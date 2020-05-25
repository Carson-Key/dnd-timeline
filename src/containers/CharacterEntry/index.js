import React, { Component, Fragment } from 'react'
import './index.css'
import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { setTimeline } from '../../utilities/validPlayers.js'

class CharacterEntry extends Component {
  render() {
    const characters = Object.keys(this.props.playerObject.characters)
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
              characters.map((character, i) => {
                setTimeline(this.props.playerObject, character)
                return (
                  <Fragment key={character}>
                    <center>
                      <Button
                        onClick={() => {this.props.characterSelect(character)}}
                      >
                        {this.props.playerObject.characters[character].name}
                      </Button>
                      <br />
                      <br />
                    </center>
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
