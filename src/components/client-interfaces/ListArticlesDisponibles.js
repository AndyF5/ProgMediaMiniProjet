import React from "react";

import ArticleClient from "./ArticleClient";

import { connect } from "react-redux";

import { getArticles } from "../../actions/vendeurActions";
import { getPanier } from "../../actions/clientActions";

class ListArticlesDisponible extends React.Component {
  componentDidMount() {
    this.props.getArticles();
    this.props.getPanier();
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-wrap">
          {this.props.articles.map(article => (
            <ArticleClient key={article.id} article={article} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles,
  panier: state.panierReducer.panier
});

export default connect(mapStateToProps, { getArticles, getPanier })(
  ListArticlesDisponible
);
