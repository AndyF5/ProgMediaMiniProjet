import React from "react";
import { Button, Row } from "react-bootstrap";
import { getArticles,addPanier } from "../../actions/clientActions";
import { connect } from "react-redux";

class ListArticleDispo extends React.Component {
  state = {
    quantite_p: ""
  };

  onChangeQuantite = e => {
    this.setState({
      quantite_p: e.target.value
    });
  };

  onClick = () => {
    this.props.addPanier(
      this.props.article.id_p,
      this.state.title_p,
      this.state.price_p,
      this.state.quantite_p
    );

    this.setState({ quantite_p: "" });
  };

  render() {
    return this.props.articles_p.map(article_p => (
      <tr>
        <td>
          <input
            type="text"
            className="form-control"
            value={article.title_p}
            disabled
          />
        </td>
        <td>
          <Row>
            <span>$</span>
            <input
              type="number"
              className="form-control col-10"
              value={article.price_p}
              disabled
            />
          </Row>
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={this.state.quantite_p}
            onChange={this.onChangeQuantite}
          />
        </td>
        <td>
          <Button
            variant="primary"
            className="float-right"
            type="submit"
            className="float-right"
            onClick={this.onClick}
          >
            Ajouter
          </Button>
        </td>
      </tr>
    ));
  }
}

const mapStateToProps = state => ({
  articles: state.panierReducer.articles_p
});

export default connect(mapStateToProps, { getArticles, addPanier })(ListArticleDispo);
