import React, { Component } from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col className="text-center">
            <h1>React Basic Tests</h1>
          </Col>
        </Row>
        <Button color="danger">Danger!</Button>
      </Container>
    );
  }
}

export default App;
