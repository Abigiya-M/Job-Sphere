import React from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

function SearchBar() {
  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Row className="w-100" style={{ maxWidth: "600px" }}>
        {" "}
        {/* Set max width */}
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Job title, Keywords, or Company name"
            />
            <Form.Control type="text" placeholder="Location" />
            <Button variant="primary">Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
