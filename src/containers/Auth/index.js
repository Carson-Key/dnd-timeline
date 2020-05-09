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
  Jumbotron
} from 'reactstrap';
import Time from '../Time'

class AuthTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: null,
      playerNameInput: ""
    }

    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
    this.setPlayerName = this.setPlayerName.bind(this);
  }

  setPlayerName() {
    this.setState({
      playerName: this.state.playerNameInput
    });
  }

  handlePlayerNameChange(event) {
    this.setState({
      playerNameInput: event.target.value
    });
  }

  render() {
    const { timeline, lessThanYearZero, greaterThanYearZero } = this.props
    const newTimeLine = {}

    if (this.state.playerName == null) {
      return (
        <Container>
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
                  value={this.state.playerNameInput}
                  onChange={this.handlePlayerNameChange}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={this.setPlayerName}>Enter</Button>
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
            timeline={newTimeLine}
            lessThanYearZero={lessThanYearZero}
            greaterThanYearZero={greaterThanYearZero}
          />
        </div>
      )
    }
  }
}

export default AuthTime
