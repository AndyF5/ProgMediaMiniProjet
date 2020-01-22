import React from "react";

import { FaTrash } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";

import { modifyProduit, removeProduit } from "../actions/produitActions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

class Produit extends React.Component {

  state = {
    title: this.props.produit.title,
    prix: this.props.produit.prix
  }

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onChangePrix = e => {
    this.setState({
      prix: e.target.value
    });
  };



  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            value={this.state.prix}
            onChange={this.onChangePrix}
          />
        </td>
        <td>
          <Button
            variant="success"
            onClick={() =>
              this.props.modifyProduit(
                this.props.produit.id,
                this.state.title,
                this.state.prix
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
