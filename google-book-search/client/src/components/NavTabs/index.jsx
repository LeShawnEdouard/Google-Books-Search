import React from "react";

function Nav() {
  return (
    <Nav variant="tabs" defaultActiveKey="/search">
      <Nav.Item>
        <Nav.Link href="/">Google Books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/search">Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/saved_books">Saved Books</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Nav;