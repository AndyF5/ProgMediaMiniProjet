import React from "react";
import Produit from "./Produit";

import { getProduits } from "../actions/produitActions";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.props.getProduits();
  }

  render() {
    return this.props.produits.map(produit => (
      <Produit key={produit.id} produit={produit} />
    ));
  }
}

const mapStateToProps = state => ({
  produits: state.produitReducer.produits
});

export default connect(mapStateToProps, { getProduits })(List);
