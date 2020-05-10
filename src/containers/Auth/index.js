import React, { Component } from 'react'
import './index.css'
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Alert
} from 'reactstrap';
import Time from '../Time'
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
    this.setPlayerTimeline = this.setPlayerTimeline.bind(this);
  }

  setPlayerTimeline() {
    if (this.state.playerName !== "") {
      this.newTimeLine = filterTimeLine(this.state.playerName, this.props.timeline)
      if (this.newTimeLine == "error") {
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

  displayError() {
    if (this.state.error != "") {
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
        <Container>
          {this.displayError()}
          <br />
          <Row>
            <Col>
              <Jumbotron fluid>
                <Container fluid>
                  <center><h1 className="display-3">Timeline</h1></center>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="centered">
            <Col>
              <p>What is Your Player's Name?</p>
              <InputGroup>
                <Input
                  placeholder="Cade Goodbarrel"
                  value={this.state.playerName}
                  onChange={this.handlePlayerNameChange}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={this.setPlayerTimeline}>Enter</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <div>
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
