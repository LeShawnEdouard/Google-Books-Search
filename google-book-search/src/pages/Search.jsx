import React, { Component } from "react";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";


class Search extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <p>Test</p>
        </Hero>
        <Jumbotron />
      </div>
    )
  }
}

export default Search;