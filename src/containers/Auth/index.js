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
      characterName: "",
      moveOn: "",
      error: ""
    }

    this.newTimeLine = {}

    this.handleCharacterNameChange = this.handleCharacterNameChange.bind(this);
    this.handleCharacterNameKey = this.handleCharacterNameKey.bind(this);
    this.setCharacterTimeline = this.setCharacterTimeline.bind(this);
    this.exitTimeLine = this.exitTimeLine.bind(this);
    this.displayError = this.displayError.bind(this);
  }

  setCharacterTimeline() {
    if (this.state.characterName !== "") {
      this.newTimeLine = filterTimeLine(this.state.characterName, this.props.timeline)
      if (this.newTimeLine === "error") {
        this.setState({
          error: "error"
        }, () => {
          setTimeout(() => {
            this.setState({
              error: ""
            })
          }, 5000)
        });
      } else {
        this.setState({
          moveOn: "True",
          error: ""
        });
      }
    }
  }

  handleCharacterNameChange(event) {
    this.setState({
      characterName: event.target.value
    });
  }
  handleCharacterNameKey(event) {
    if (event.key === "Enter") {
      this.setState({
        characterName: event.target.value
      }, this.setCharacterTimeline());
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
          Please Enter a valid Character name
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
            onChange={this.handleCharacterNameChange}
            enterFunc={this.setCharacterTimeline}
            onKeyPress={this.handleCharacterNameKey}
          />
        </div>
      )
    } else {
      return (
        <TimelineDecorator
          exitTimeLine={this.exitTimeLine}
          characterName={this.state.characterName}
          newTimeLine={this.newTimeLine}
          lessThanYearZero={this.props.lessThanYearZero}
          greaterThanYearZero={this.props.greaterThanYearZero}
        />
      )
    }
  }
}

export default AuthTime
