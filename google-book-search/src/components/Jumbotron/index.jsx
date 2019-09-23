import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
// import "./style.css";


function SearchBar() {
  return (
<Jumbotron>
  <h1>Book Search</h1>
  <p>
    Book
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  );
}

export default SearchBar;