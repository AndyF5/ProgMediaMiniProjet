import React from "react";

import Article from "../Article";

import { Table } from "react-bootstrap";
import { connect } from "react-redux";

import { getArticles } from "../../actions/vendeurActions";

class ListArticlesVendeur extends React.Component {
  componentDidMount(){
    this.props.getTasks();
  }

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th className="text-nowrap">Prix Unitaire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.vendeurReducer.articles
});

export default connect(mapStateToProps, { getArticles })(ListArticlesVendeur);