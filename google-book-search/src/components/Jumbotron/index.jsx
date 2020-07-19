import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

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
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Form>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  );
}

export default SearchBar;