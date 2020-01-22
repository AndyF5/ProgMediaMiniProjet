import React from "react";

import { FaTrash } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";

import { modifyProduit, removeProduit } from "../actions/produitActions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class Produit extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            className="form-control"
            onChange={this.onChange}
            value={this.props.produit.title}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            onChange={this.onChange}
            value={this.props.produit.prix}
          />
        </td>
        <td>
          <Button
            variant="success"
            onClick={() =>
              this.props.modifyProduit(
                this.props.produit.title,
                this.props.produit.prix
              )
            }
          >
            <GiCardExchange />
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            className="float-right"
            onClick={() => this.props.removeProduit(this.props.produit.id)}
          >
            <FaTrash />
          </Button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  produits: state.produitReducer.produits
});

export default connect(mapStateToProps, { modifyProduit, removeProduit })(
  Produit
);
