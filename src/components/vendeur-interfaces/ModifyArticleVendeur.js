import React from "react";
import { Form, Button } from "react-bootstrap";

class ModifyArticleVendeur extends React.Component {
  render() {
    return (
      <div>
        <Form.Label>Choisir l'article à modifier:</Form.Label>
        <Form.Control as="select" className="mb-2">
        
        </Form.Control>

        <hr />

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
            Modifier
          </Button>
        </Form>
      </div>
    );
  }
}

export default ModifyArticleVendeur;