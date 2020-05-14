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

class CharacterEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
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
                onChange={this.props.onChange}
                onKeyPress={this.props.onKeyPress}
              />
              <InputGroupAddon addonType="append">
                <Button onClick={this.props.enterFunc}>Enter</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CharacterEntry
