import React from "react";
import { Card, Table, Nav, Tab, Row, Col, NavItem, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";

import { getPanier } from "../actions/clientActions";
import { connect } from "react-redux";

import ListArticlesDisponible from "./client-interfaces/ListArticlesDisponibles";
import SoldeClient from "./client-interfaces/SoldeClient";
import PanierClient from "./client-interfaces/PanierClient";
import CommandesClient from "./client-interfaces/CommandesClient";

//  Interface pour client
class Client extends React.Component {
  componentDidMount(){
    this.props.getPanier();
  }

  render() {
    return (
      <Card id="cardClient">
        <Card.Header as="h5">
          Espace Client
        </Card.Header>
        <Card.Body>
          <Tab.Container id="tabs-gestion">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mb-4">
                  <Nav.Link as={NavLink} to="/client/articles">Articles</Nav.Link>
                  <Nav.Link as={NavLink} to="/client/solde">Solde</Nav.Link>
                  <Nav.Link as={NavLink} to="/client/panier">
                    Panier &nbsp;
                    <Badge variant="secondary" className="m-auto">
                      {this.props.panier.reduce((prev, next) => prev + next.quantite, 0)}
                    </Badge>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/client/commandes">
                    Vos Commandes
                  </Nav.Link>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Route path="/client/articles" component={ListArticlesDisponible} />
                  <Route path="/client/solde" component={SoldeClient} />
                  <Route path="/client/panier" component={PanierClient} />
                  <Route path="/client/commandes" component={CommandesClient} />
                  <Redirect exact from="/client" to="/client/articles" />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  panier: state.panierReducer.panier
});


export default connect(mapStateToProps, { getPanier })(Client);