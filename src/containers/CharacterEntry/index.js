import React, { Component } from 'react'
import './index.css'
import {
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { capitalizeFirstLetter } from '../../utilities/capitalizeFirstLetter.js'
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
                  <center>
                    <Button
                      onClick={() => {this.props.characterSelect(character)}}
                    >
                      {capitalizeFirstLetter(character)}
                    </Button>
                    <br />
                    <br />
                  </center>
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
