import React from "react";
import { Card, Table, Nav, Tab, Row, Col } from "react-bootstrap";

import ListArticlesVendeur from "./vendeur-interfaces/ListArticlesVendeur";
import AddArticleVendeur from "./vendeur-interfaces/AddArticleVendeur";
import ModifyArticleVendeur from "./vendeur-interfaces/ModifyArticleVendeur";

class Vendeur extends React.Component {

  render() {
    return (
      <Card>
        <Card.Header as="h5">
          Gestion d'articles
        </Card.Header>
        <Card.Body>
          <Tab.Container id="tabs-gestion" defaultActiveKey="articles">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="articles">Articles</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ajouter">Ajouter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="modifier">Modifier</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="articles" className="p-3">
                      <ListArticlesVendeur />
                  </Tab.Pane>
                  <Tab.Pane eventKey="ajouter" className="p-3">
                      <AddArticleVendeur />
                  </Tab.Pane>
                  <Tab.Pane eventKey="modifier" className="p-3">
                      <ModifyArticleVendeur />
                  </Tab.Pane>
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
