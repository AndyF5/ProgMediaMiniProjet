import React from "react";
import ArticleClient from "./ArticleClient";

import { getArticles } from "../../actions/vendeurActions";
import { connect } from "react-redux";

class ListArticleDispo extends React.Component {
  constructor(props) {
    super(props);
    this.props.getArticles();
  }

  render() {
    return this.props.articles_p.map(article_p => (
      <ArticleClient key={article_p.id} article_p={article_p} />
    ));
  }
}

const mapStateToProps = state => ({
  articles: state.panierReducer.articles_p
});

export default connect(mapStateToProps, { getArticles })(ListArticleDispo);