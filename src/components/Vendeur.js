import React from "react";
import { Card, Table, Nav, Tab, Row, Col, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom";

//  Interfaces
import ListArticlesVendeur from "./vendeur-interfaces/ListArticlesVendeur";
import AddArticleVendeur from "./vendeur-interfaces/AddArticleVendeur";
import ModifyArticleVendeur from "./vendeur-interfaces/ModifyArticleVendeur";

class Vendeur extends React.Component {
  render() {
    return (
      <Card id="cardVendeur">
        <Card.Header as="h5">
          Gestion d'articles
        </Card.Header>
        <Card.Body>
          <Tab.Container id="tabs-gestion">
            <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Link as={NavLink} to="/vendeur/articles">Articles</Nav.Link>
                    <Nav.Link as={NavLink} to="/vendeur/ajouter">Ajouter</Nav.Link>
                    <Nav.Link as={NavLink} to="/vendeur/modifier">Modifier</Nav.Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Route exact path="/vendeur/articles" component={ListArticlesVendeur} />
                    <Route exact path="/vendeur/ajouter" component={AddArticleVendeur} />
                    <Route path="/vendeur/modifier/:articleID?" component={ModifyArticleVendeur} />
                    <Redirect exact from="/vendeur" to="/vendeur/articles" /> 
                  </Tab.Content>
                </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    );
  }
}

export default Vendeur;
