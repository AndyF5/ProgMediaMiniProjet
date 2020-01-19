import React from "react";
import { Card, Table, Nav, Tab, Row, Col, NavItem, Badge } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";

import { getPanier } from "../actions/clientActions";
import { connect } from "react-redux";

import ListArticlesDisponible from "./client-interfaces/ListArticlesDisponibles";
import SoldeClient from "./client-interfaces/SoldeClient";
import PanierClient from "./client-interfaces/PanierClient";

class Client extends React.Component {
  componentDidMount(){
    this.props.getPanier();
  }

  render() {
    return (
      <Card>
        <Card.Header as="h5">
          Articles disponibles
        </Card.Header>
        <Card.Body>
          <Tab.Container id="tabs-gestion">
            <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Link as={NavLink} to="/client/articles">Articles</Nav.Link>
                    <Nav.Link as={NavLink} to="/client/solde">Solde</Nav.Link>
                    <Nav.Link as={NavLink} to="/client/panier">
                      Panier &nbsp;
                      <Badge variant="secondary">
                        {this.props.panier.length}
                      </Badge>
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Route path="/client/articles" component={ListArticlesDisponible} />
                    <Route path="/client/solde" component={SoldeClient} />
                    <Route path="/client/panier" component={PanierClient} />
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
  panier: state.clientReducer.panier
});


export default connect(mapStateToProps, { getPanier })(Client);