import React from "react";

import AddProduit from "./AddProduit";
import List from "./List";
import { Card, Table, Container } from "react-bootstrap";
import { FaList } from "react-icons/fa";

class Vendeur extends React.Component {
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Card>
          <Card.Header>
            <FaList /> List d'acticles
          </Card.Header>
          <Card.Body>
            <AddProduit />

            <hr />

            <Table borderless>
              <tbody>
                <List />
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Vendeur;
