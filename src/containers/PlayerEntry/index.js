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

class PlayerEntry extends Component {
  render() {
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
        <Row>
          <Col>
              <label htmlFor="playerName">What is Your Name:</label>
              <center>
              <InputGroup>
                <Input
                  id="playerName"
                  placeholder="John Smith"
                  value={this.props.playerName}
                  onChange={this.props.onChange}
                  onKeyPress={this.props.onKeyPress}
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={this.props.enterFunc}>Enter</Button>
                </InputGroupAddon>
              </InputGroup>
            </center>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PlayerEntry
