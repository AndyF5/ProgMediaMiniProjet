import React from "react";
import { Form, Button, Card } from "react-bootstrap";

import { getArticles, modifyArticle } from "../../actions/vendeurActions";
import { connect } from "react-redux";

class ModifyArticleVendeur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:
        this.props.match.params.articleID == null
          ? "Selectionner un article"
          : this.props.match.params.articleID,
      title:
        this.props.match.params.articleID == null
          ? ""
          : this.props.articles.find(
              article => article.id == this.props.match.params.articleID
            ).title,
      prixUnitaire:
        this.props.match.params.articleID == null
          ? ""
          : this.props.articles.find(
              article => article.id == this.props.match.params.articleID
            ).prixUnitaire,
      newTitle: "",
      newPrix: "",
      newURL: ""
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  handleSelectionChange = e => {
    this.setState({
      id: e.target.value,
      title: this.props.articles.find(article => article.id == e.target.value)
        .title,
      prixUnitaire: this.props.articles.find(
        article => article.id == e.target.value
      ).prixUnitaire,
      imageURL: this.props.articles.find(
        article => article.id == e.target.value
      ).imageURL
    });
  };

  handleTitleChange = e => {
    this.setState({
      newTitle: e.target.value
    });
  };

  handlePrixChange = e => {
    this.setState({
      newPrix: e.target.value
    });
  };

  handleURLChange = e => {
    this.setState({
      newURL: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.modifyArticle(
      this.state.id,
      this.state.newTitle == "" ? this.state.title : this.state.newTitle,
      this.state.newPrix == ""
        ? this.state.prixUnitaire
        : parseFloat(this.state.newPrix)
    );
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Label>Choisir l'article à modifier:</Form.Label>
          <Form.Control
            as="select"
            className="mb-2"
            onChange={this.handleSelectionChange}
            value={this.state.id}
          >
            <option>Selectionner un article</option>
            {this.props.articles.map(article => (
              <option key={article.id} value={article.id}>
                {article.title}
              </option>
            ))}
          </Form.Control>
        </Form>

        <hr />

        <Form>
          <Form.Group controlId="formArticleTitre">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              placeholder={this.state.title}
              value={this.state.newTitle}
              onChange={this.handleTitleChange}
            />
          </Form.Group>
          <Form.Group controlId="formArticlePrix">
            <Form.Label>Prix unitaire</Form.Label>
            <Form.Control
              type="number"
              placeholder={this.state.prixUnitaire}
              value={this.state.newPrix}
              onChange={this.handlePrixChange}
            />
          </Form.Group>

          <Form.Group controlId="formArticleURL">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder={this.state.imageURL}
              value={this.state.newURL}
              onChange={this.handleURLChange}
            />
          </Form.Group>

          <div className="d-inline-block">
            {this.state.newURL == "" ? (
              this.state.imageURL == null ? (
                <div></div>
              ) : (
                <Card className="imageCard">
                  <Card.Img
                    src={this.state.imageURL}
                    className="thumbnail"
                    alt="&nbsp;Image introuvable"
                  />
                </Card>
              )
            ) : (
              <Card className="imageCard">
                <Card.Img
                  src={this.state.newURL}
                  className="thumbnail"
                  alt="&nbsp;Image introuvable"
                />
              </Card>
            )}
          </div>

          <Button
            variant="outline-primary"
            className="float-right"
            onClick={() =>
              this.props.modifyArticle(
                this.state.id,
                this.state.newTitle == ""
                  ? this.state.title
                  : this.state.newTitle,
                this.state.newPrix == ""
                  ? this.state.prixUnitaire
                  : parseFloat(this.state.newPrix)
              )
            }
          >
            Modifier
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default connect(mapStateToProps, { getArticles, modifyArticle })(
  ModifyArticleVendeur
);
