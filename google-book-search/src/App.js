import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import NavTab from "./components/NavTabs";


  function App() {
    return (
      <Router>
        <div>
          <NavTab />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Home} />
            <Route exact path="/saved_books" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


export default App;
