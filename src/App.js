import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Client from "./components/Client";
import Accueil from "./components/Accueil";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navigation />

        <Route exact path="/">
          <Accueil />
        </Route>

        <Route exact path="/vendeur">
          <Vendeur />
        </Route>

        <Route exact path="/client">
          <Client></Client>
        </Route>
      </Router>
    );
  }
}

export default () => (
  <>
    <h1>Welcome to React Parcel Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
  </>
);
