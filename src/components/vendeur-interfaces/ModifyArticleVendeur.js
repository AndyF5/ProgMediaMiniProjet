import React from "react";
import { Form, Button } from "react-bootstrap";

import { getArticles, modifyArticle } from "../../actions/vendeurActions";
import { connect } from "react-redux";

class ModifyArticleVendeur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.articleID == null ? "Selectionner un article" : this.props.match.params.articleID,
        title: this.props.match.params.articleID == null ? "" : this.props.articles.find(article => article.id == this.props.match.params.articleID).title,
        price: this.props.match.params.articleID == null ? "" : this.props.articles.find(article => article.id == this.props.match.params.articleID).price,
        newTitle: "",
        newPrix: ""
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  handleSelectionChange = (e) => {
    this.setState({
      id: e.target.value,
      title: this.props.articles.find(article => article.id == e.target.value).title,
      price: this.props.articles.find(article => article.id == e.target.value).price
    });
  }

  handleTitleChange = (e) => {
    var newState = this.state;

    this.setState({
      newTitle: e.target.value
    });
  }

  handlePrixChange = (e) => {
    this.setState({
      newPrix: parseFloat(e.target.value)
    });
  }

  handleSubmit = (e) => {
    this.props.modifyArticle(
      this.state.id,
      this.state.newTitle == "" ? this.state.title : this.state.newTitle,
      this.state.newPrix == "" ? this.state.price : this.state.newPrix
    );

    this.setState({
      reset: true
    })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Label>Choisir l'article à modifier:</Form.Label>
          <Form.Control as="select" className="mb-2" onChange={this.handleSelectionChange} value={this.state.id}>
            <option>Selectionner un article</option>
            {this.props.articles.map(article => (
              <option key={article.id} value={article.id}>{article.title}</option>
            ))}
          </Form.Control>
        </Form>
        

        <hr />

        <Form>
          <Form.Group controlId="formArticleTitre">
            <Form.Label>Titre</Form.Label>
            <Form.Control type="text" placeholder={this.state.title} value={this.state.newTitle} onChange={this.handleTitleChange} />
          </Form.Group>
          <Form.Group controlId="formArticlePrix">
            <Form.Label>Prix unitaire</Form.Label>
            <Form.Control type="number" placeholder={this.state.price}  value={this.state.newPrix} onChange={this.handlePrixChange} />
          </Form.Group>

          <Button variant="outline-primary" className="float-right" onClick={this.handleSubmit}>
            Modifier
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
})

export default connect(mapStateToProps, { getArticles, modifyArticle })(ModifyArticleVendeur);