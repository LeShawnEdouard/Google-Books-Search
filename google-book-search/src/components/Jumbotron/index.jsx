import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import "./style.css";


function SearchBar() {
  return (
<Jumbotron>
  <h1>Book Search</h1>
  <p>
    Book
  </p>
  <Form>
    <Col>
      <Form.Control type="text" placeholder="Book Search" />
    </Col>
  </Form>
  <br></br>
  <p>
    <Row>
      <Col>
      <Button variant="primary">Search</Button>
      </Col>
    </Row>
  </p>
</Jumbotron>
  );
}

export default SearchBar;