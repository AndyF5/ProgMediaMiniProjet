import React from "react";
import { Card, Table, Button, Container, Badge } from "react-bootstrap";
import ListArticleDispo from "./Client/ListArticleDispo";

class Client extends React.Component {
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Card>
          <Card.Header>Articles disponibles</Card.Header>
          <Card.Body>
            <Table borderless>
              <thead>
                <tr >
                  <th >Titre</th>
                  <th >Prix unitaire</th>
                  <th >Quantité</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                  <ListArticleDispo />
              </tbody>
            </Table>

            <hr />

            <Table borderless>
              <tbody>
                <tr >
                  <td >
                    <span>
                      Solde :<Badge variant="success">500</Badge> $
                    </span>
                  </td>
                  <td >
                    <input type="number" className="form-control" />
                  </td>
                  <td >
                    <Button variant="success" className="float-right">
                      Ajouter
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Panier</Card.Header>
          <Card.Body>
            <Table borderless>
              <thead>
                <tr >
                  <th >Titre</th>
                  <th >Prix unitaire</th>
                  <th >Quantité</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td >Bananes</td>
                  <td >10$</td>
                  <td >10$</td>
                  <td >
                    <Button variant="danger" className="float-right">
                      Enlever
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <hr />

            <Table borderless>
              <tbody>
                <tr >
                  <td >Total</td>
                  <td ></td>
                  <td ></td>
                  <td >
                    <Button variant="success" className="float-right">
                      Payer
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <hr />

            <h5>Facture</h5>

            <Table borderless>
              <tbody>
                <tr>
                  <td>Total TVQ</td>
                  <td>0$</td>
                </tr>
                <tr>
                  <td>Total TPS</td>
                  <td>0$</td>
                </tr>
                <tr>
                  <td>Total à payer</td>
                  <td>0$</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Client;
