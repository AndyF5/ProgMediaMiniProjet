import React from "react";
import { Form, Button } from "react-bootstrap";

class AddArticleVendeur extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formArticleTitre">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="Entrez le titre" />
        </Form.Group>
        <Form.Group controlId="formArticlePrix">
          <Form.Label>Prix unitaire</Form.Label>
          <Form.Control type="number" placeholder="Entrez le prix unitaire" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    );
  }
}

export default AddArticleVendeur;