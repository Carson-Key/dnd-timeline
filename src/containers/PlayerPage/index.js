import React, { Component } from 'react'
import './index.css'
import CharacterEntry from '../CharacterEntry'
import Timeline from '../Timeline'

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "",
      moveOn: ""
    }

    this.exitTimeLine = this.exitTimeLine.bind(this);
    this.characterSelect = this.characterSelect.bind(this);
  }

  characterSelect(name) {
    this.setState({
      characterName: name,
      moveOn: "go"
    })
  }

  exitTimeLine() {
    this.setState({
      moveOn: ""
    });
  }

  render() {
    if (this.state.moveOn === "") {
      return (
        <CharacterEntry
          playerObject={this.props.playerObject}
          characterSelect={this.characterSelect}
        />
      )
    } else {
      return (
        <Timeline
          exitTimeLine={this.exitTimeLine}
          characterName={this.state.characterName}
          playerObject={this.props.playerObject}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      )
    }
  }
}

export default PlayerPage
