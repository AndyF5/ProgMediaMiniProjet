import React from "react";
import ListArticleDispo from "./ListArticleDispo";

import { getArticles } from "../../actions/clientActions";
import { connect } from "react-redux";

class ListPanier extends React.Component {
  constructor(props) {
    super(props);
    this.props.getArticles();
  }

  render() {
    return this.props.articles_p.map(article_p => (
      <Article key={article_p.id_p} article_p={article_p} />
    ));
  }
}

const mapStateToProps = state => ({
  articles: state.panierReducer.articles_p
});

export default connect(mapStateToProps, { getArticles })(ListPanier);