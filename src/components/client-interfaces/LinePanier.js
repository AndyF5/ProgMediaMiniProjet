import React from "react";

import { getArticles } from "../../actions/vendeurActions";
import { deleteFromPanier } from "../../actions/clientActions";
import { connect } from "react-redux";

import { Button } from "react-bootstrap";
import { FiDelete } from "react-icons/fi";

class LinePanier extends React.Component {
  render() {
    return (
      <tr>
        <td className="align-middle">
          {this.props.articles.find((element) => {return element.id == this.props.item.articleID}).title}
        </td>
        <td align="right" className="align-middle">
          {this.props.item.quantite}
        </td>
        <td align="right" className="align-middle">
          ${(this.props.articles.find((element) => {return element.id == this.props.item.articleID}).prixUnitaire * this.props.item.quantite).toFixed(2)}
        </td>
        <td align="middle">
          <Button variant="outline-danger" onClick={() => this.props.deleteFromPanier(this.props.item.id)}>
            <FiDelete />
          </Button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  panier: state.clientReducer.panier,
  articles: state.vendeurReducer.articles
});

export default connect(mapStateToProps, { getArticles, deleteFromPanier })(LinePanier);