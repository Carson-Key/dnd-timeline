import React, { Component } from 'react'
import './index.css'
import {
  Alert
} from 'reactstrap';
import PlayerPage from '../PlayerPage'
import PlayerEntry from '../PlayerEntry'
import { validatePlayer } from '../../utilities/validPlayers.js'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      moveOn: "",
      error: "",
      playerObject: {}
    }

    this.newTimeLine = {}

    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.handlePlayerNameKey = this.handlePlayerNameKey.bind(this);
    this.displayError = this.displayError.bind(this);
    this.enterPlayerName = this.enterPlayerName.bind(this);
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
      }, this.enterPlayerName(this.state.playerName));
    }
  }
  enterPlayerName() {
    const playerObject = validatePlayer(this.state.playerName)
    if (playerObject === "error") {
      this.setState({
        error: playerObject
      });
    } else {
      this.setState({
        moveOn: "go",
        playerObject: playerObject
      })
    }
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
          <PlayerEntry
            onChange={this.handlePlayerNameChange}
            onKeyPress={this.handlePlayerNameKey}
            enterFunc={this.enterPlayerName}
          />
        </div>
      )
    } else {
      return (
        <PlayerPage
          exitTimeLine={this.exitTimeLine}
          playerName={this.state.playerName}
          playerObject={this.state.playerObject}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      )
    }
  }
}

export default Auth
