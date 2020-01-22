import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./css/app.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//  Composants
import Navigation from "./components/Navigation";
import Client from "./components/Client";
import Vendeur from "./components/Vendeur";
import Accueil from "./components/Accueil";

//  Composant racine
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
            <div className="d-flex w-100 justify-content-center align-items-center pt-4">
            <Switch>
              <Route exact path="/" component={Accueil}/>
              <Route path="/vendeur" component={Vendeur}/>
              <Route path="/client" component={Client}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;