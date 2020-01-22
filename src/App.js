import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Vendeur from "./components/Vendeur";
import Client from "./components/Client";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <div
                id="container"
                className="d-flex align-items-center justify-content-center"
              >
                <Accueil />
              </div>
            </Route>

            <Route exact path="/vendeur">
              <div
                id="container"
                className="d-flex align-items-center justify-content-center"
              >
                <Vendeur />
              </div>
            </Route>

            <Route exact path="/client">
              <div
                id="container"
                className="d-flex align-items-center justify-content-center"
              >
                <Client />
              </div>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
/*export default () => (
  <>
    <h1>Welcome to React Parcel Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
  </>
);*/
