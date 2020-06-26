import React, { Component, Fragment } from 'react'
import './index.css'
import {
  Button
} from 'reactstrap';
import { setTimeline } from '../../utilities/validPlayers.js'

class Character extends Component {
  render() {
    const characters = Object.keys(this.props.characters)
    return (
      characters.map((character, i) => {
        setTimeline(this.props.playerObject, character, this.props.timelineKey)
        return (
          <Fragment key={i}>
            <center>
              <Button
                onClick={() => {this.props.characterSelect(character, this.props.timelineKey)}}
              >
                {this.props.playerObject.timelines[this.props.timelineKey].characters[character].name}
              </Button>
              <br />
              <br />
            </center>
          </Fragment>
        )
      })
    )
  }
}

export default Character
