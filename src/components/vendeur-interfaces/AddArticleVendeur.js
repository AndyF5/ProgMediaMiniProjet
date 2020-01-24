import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addArticle } from "../../actions/vendeurActions";

class AddArticleVendeur extends React.Component {
  state = {
    title: "",
    price: ""
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handlePrixChange = (e) => {
    this.setState({
      price: e.target.value
    });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formArticleTitre">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="Entrez le titre" value={this.state.title} onChange={this.handleTitleChange} />
        </Form.Group>
        <Form.Group controlId="formArticlePrix">
          <Form.Label>Prix unitaire</Form.Label>
          <Form.Control type="number" placeholder="Entrez le prix unitaire" value={this.state.price} onChange={this.handlePrixChange} />
        </Form.Group>

        <Button variant="outline-primary" type="submit" className="float-right" onClick={() => this.props.addArticle(this.state.title, parseFloat(this.state.price))}>
          Ajouter
        </Button>
      </Form>
    );
  }
}

export default connect(null, { addArticle })(AddArticleVendeur);