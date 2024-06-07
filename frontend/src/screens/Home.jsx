import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
      {/* Welcome Section */}
      <Row className="mt-5">
        <Col className="text-center">
          <h1>Welcome to VroomEco!</h1>
          <p className="lead">Find your rides here.</p>
          <Button variant="primary">Learn more</Button>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mt-5">
        <Col>
          <h2>How it works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin semper mauris nec magna faucibus, nec consectetur
            risus pellentesque.
          </p>
        </Col>
        <Col>
          <h2>Why VroomEco?</h2>
          <p>
            Sed euismod ligula id nunc porta, ac sagittis magna cursus.
            Fusce nec massa magna.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
