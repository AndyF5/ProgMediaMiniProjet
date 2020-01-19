import React from "react";
import { Card, Table } from "react-bootstrap";

class Client extends React.Component {
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
                    <Nav.Link as={NavLink} to="/vendeur/articles">Articles</Nav.Link>
                    <Nav.Link as={NavLink} to="/vendeur/ajouter">Ajouter</Nav.Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Route exact path="/vendeur/articles">
                      <ListArticlesVendeur />
                    </Route>
                    <Route exact path="/vendeur/ajouter">
                      <AddArticleVendeur />
                    </Route>
                  </Tab.Content>
                </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>

          <hr />

          <Table>
            <tbody>
                
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default Client;