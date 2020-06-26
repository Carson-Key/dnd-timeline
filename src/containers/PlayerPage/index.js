import React, { Component } from 'react'
import './index.css'
import CharacterEntry from '../CharacterEntry'
import Timeline from '../Timeline'

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "",
      timelineName: "",
      moveOn: ""
    }

    this.exitTimeLine = this.exitTimeLine.bind(this);
    this.characterSelect = this.characterSelect.bind(this);
  }

  characterSelect(name, timeline) {
    this.setState({
      characterName: name,
      timelineName: timeline,
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
          timelineName={this.state.timelineName}
          playerObject={this.props.playerObject}
        />
      )
    }
  }
}

export default PlayerPage
