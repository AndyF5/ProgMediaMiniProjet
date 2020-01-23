import React from "react";

import ArticleClient from "./ArticleClient";

import { Table } from "react-bootstrap";
import { connect } from "react-redux";

import { getArticles } from "../../actions/vendeurActions";
import { getPanier } from "../../actions/clientActions";

class ListArticlesDisponible extends React.Component {
  componentDidMount(){
    this.props.getArticles();
    this.props.getPanier();
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titre</th>
              <th className="text-nowrap">Prix unitaire</th>
              <th>Quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.articles.map(article => (
              <ArticleClient key={article.id} article={article} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.vendeurReducer.articles,
  panier: state.panierReducer.panier
});

export default connect(mapStateToProps, { getArticles, getPanier })(ListArticlesDisponible);