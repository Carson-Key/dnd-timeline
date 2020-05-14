import React, { Component } from 'react'
import './index.css'
import {
  Button
} from 'reactstrap';
import Time from '../Time'
import CharacterEntry from '../CharacterEntry'
import { filterTimeLine } from '../../utilities/filterTimeLine.js'
import { capitalizeFirstLetter } from '../../utilities/capitalizeFirstLetter.js'

class AuthTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      moveOn: "",
      error: ""
    }

    this.newTimeLine = {}

    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.setPlayerTimeline = this.setPlayerTimeline.bind(this);
    this.exitTimeLine = this.exitTimeLine.bind(this);
  }

  setPlayerTimeline() {
    if (this.state.playerName !== "") {
      this.newTimeLine = filterTimeLine(this.state.playerName, this.props.timeline)
      if (this.newTimeLine === "error") {
        this.setState({
          error: "error"
        });
      } else {
        this.setState({
          moveOn: "True"
        });
      }
    }
  }

  handlePlayerNameChange(event) {
    this.setState({
      playerName: event.target.value
    });
  }

  exitTimeLine() {
    this.setState({
      moveOn: ""
    });
  }

  render() {
    if (this.state.moveOn === "") {
      return (
        <div>
          <CharacterEntry
            onChange={this.handlePlayerNameChange}
            enterFunc={this.setPlayerTimeline}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Button
            className="exitButton"
            color="danger"
            onClick={this.exitTimeLine}
          >
            exit {capitalizeFirstLetter(this.state.playerName)}
          </Button>
          <Time
            timeline={this.newTimeLine}
            lessThanYearZero={this.props.lessThanYearZero}
            greaterThanYearZero={this.props.greaterThanYearZero}
          />
        </div>
      )
    }
  }
}

export default AuthTime
