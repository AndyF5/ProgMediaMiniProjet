import React from "react";
import Article from "./Article";

import { getArticles } from "../../actions/vendeurActions";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.props.getArticles();
  }

  render() {
    return this.props.articles.map(article => (
      <Article key={article.id} article={article} />
    ));
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default connect(mapStateToProps, { getArticles })(List);
