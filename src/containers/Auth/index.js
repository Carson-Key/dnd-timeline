import React, { Component } from 'react'
import './index.css'
import {
  Alert
} from 'reactstrap';
import CharacterEntry from '../CharacterEntry'
import TimelineDecorator from './TimelineDecorator'
import { filterTimeLine } from '../../utilities/filterTimeLine.js'

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
    this.handlePlayerNameKey = this.handlePlayerNameKey.bind(this);
    this.setPlayerTimeline = this.setPlayerTimeline.bind(this);
    this.exitTimeLine = this.exitTimeLine.bind(this);
    this.displayError = this.displayError.bind(this);
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
          moveOn: "True",
          error: ""
        });
      }
    }
  }

  handlePlayerNameChange(event) {
    this.setState({
      playerName: event.target.value
    });
  }
  handlePlayerNameKey(event) {
    if (event.key === "Enter") {
      this.setState({
        playerName: event.target.value
      }, this.setPlayerTimeline());
    }
  }

  exitTimeLine() {
    this.setState({
      moveOn: ""
    });
  }

  displayError() {
    if (this.state.error !== "") {
      return (
        <Alert color="danger">
          Please Enter a valid player name
        </Alert>
      )
    } else {
      return
    }
  }

  render() {
    if (this.state.moveOn === "") {
      return (
        <div>
          {this.displayError()}
          <CharacterEntry
            onChange={this.handlePlayerNameChange}
            enterFunc={this.setPlayerTimeline}
            onKeyPress={this.handlePlayerNameKey}
          />
        </div>
      )
    } else {
      return (
        <TimelineDecorator
          exitTimeLine={this.exitTimeLine}
          playerName={this.state.playerName}
          newTimeLine={this.newTimeLine}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      )
    }
  }
}

export default AuthTime
