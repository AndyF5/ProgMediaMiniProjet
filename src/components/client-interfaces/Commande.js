import React from "react";

class Commande extends React.Component {
  constructor(props) {
    super(props);
    var items = 0;
    this.props.commande.panier.map((ligne) => items += ligne.quantite);
    this.state = {
      items: items
    }
  }

  render() {
    return(
      <tr>
        <td className="align-middle">
          {this.props.commande.date.toLocaleDateString()} {this.props.commande.date.toLocaleTimeString()}
        </td>
        <td align="right" className="align-middle">
          {this.state.items}
        </td>
        <td align="right" className="align-middle">
          ${this.props.commande.montant.toFixed(2)}
        </td>
      </tr>
    )
  }
}

export default Commande;