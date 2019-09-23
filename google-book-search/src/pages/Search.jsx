import React, { Component } from "react";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Results from "../components/Results";


class Search extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <p>Test</p>
        </Hero>
        <Jumbotron />
        <Results />
      </div>
    )
  }
}

export default Search;