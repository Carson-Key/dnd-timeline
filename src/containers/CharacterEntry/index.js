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

class CharacterEntry extends Component {
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
        <Row className="centered">
          <Col>
            <p>What is Your Character Name?</p>
            <InputGroup>
              <Input
                placeholder="Cade Goodbarrel"
                value={this.props.characterName}
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
