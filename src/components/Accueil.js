import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Accueil extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1 className="display-4">Bienvenue !</h1>
          <p className="lead">Ceci est la page principale.</p>
        </Container>
      </Jumbotron>
    );
  }
}
export default Accueil;
