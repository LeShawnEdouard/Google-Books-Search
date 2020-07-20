import React, { Component } from "react";
import Hero from '../components/Hero';
import SavedContainer from "../components/Saved";


class Saved extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80">
        </Hero>
        <SavedContainer />
        
      </div>
    )
  }
}

export default Saved;