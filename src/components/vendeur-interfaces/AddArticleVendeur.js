import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";

import { addArticle } from "../../actions/vendeurActions";

class AddArticleVendeur extends React.Component {
  state = {
    title: "",
    prixUnitaire: "",
    imageURL: ""
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handlePrixChange = (e) => {
    this.setState({
      prixUnitaire: e.target.value
    });
  }

  handleURLChange = (e) => {
    this.setState({
      imageURL: e.target.value
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
          <Form.Control type="number" step="0.01" placeholder="Entrez le prix unitaire" value={this.state.prixUnitaire} onChange={this.handlePrixChange} />
        </Form.Group>
        <Form.Group controlId="formArticleURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Entrez l'URL de l'image" value={this.state.imageURL} onChange={this.handleURLChange} />
        </Form.Group>

        <div className="d-inline-block">
          {this.state.imageURL == "" ? <div></div> : 
            <Card className="imageCard">
              <Card.Img src={this.state.imageURL} className="thumbnail" alt="&nbsp;Image introuvable"/>
            </Card>
          }
        </div>

        <Button variant="outline-primary" type="submit" className="float-right" onClick={() => this.props.addArticle(this.state.title, parseFloat(this.state.prixUnitaire), this.state.imageURL)}>
          Ajouter
        </Button>
      </Form>
    );
  }
}

export default connect(null, { addArticle })(AddArticleVendeur);