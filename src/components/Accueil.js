import React from "react";
import { Jumbotron } from "react-bootstrap";

class Accueil extends React.Component {
    render() {
        return (
            <Jumbotron className="align-self-start mt-3">
                <h1>Bienvenue dans l'application de vente en ligne.</h1>
                <h3>Mini-projet 1 - Programmation Multimedia I</h3>
            </Jumbotron>
        );
    }
}

export default Accueil;