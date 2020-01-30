import React from "react";

import { removeArticle, selectArticle } from "../actions/vendeurActions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import { FiDelete, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

class Article extends React.Component {
  render() {
    return (
      <tr>
        <td className="w-50 align-middle">{this.props.article.title}</td>
        <td align="right" className="w-25 align-middle">
          ${this.props.article.prixUnitaire.toFixed(2)}
        </td>
        <td>
          <div className="d-flex justify-content-around">
            <Button
              variant="outline-danger"
              onClick={() => this.props.removeArticle(this.props.article.id)}
            >
              <FiDelete />
            </Button>
            <Link
              className="btn btn-outline-primary"
              to={`/vendeur/modifier/${this.props.article.id}`}
            >
              <FiEdit />
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default connect(mapStateToProps, { removeArticle, selectArticle })(
  Article
);
