import React from "react";
import { Table, Badge } from "react-bootstrap";

import { getArchiveCommandes } from "../../actions/clientActions";
import { getSoldeVendeur } from "../../actions/vendeurActions";
import { connect } from "react-redux";
import Commande from "./Commande";

class Commandes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      items: 0
    }
  }
    
  componentDidMount() {
    this.props.getArchiveCommandes();
    this.props.getSoldeVendeur();
    
    var newTotal = 0;

    this.props.commandes.map((commande) => (
      newTotal += commande.montant
    ));

    this.setState({
      total: newTotal
    });
  }
    
  render() {
    return (
      <div>
        <h3>Vos bénéfices: <Badge variant="success">${this.props.soldeVendeur.montant.toFixed(2)}</Badge></h3>
        <hr />
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Items</th>
              <th>Montant</th>
              <th>Actions</th>
            </tr>
          </thead>
          {this.props.commandes.map((commande) => (
            <Commande key={commande.id} commande={commande}/>
          ))}
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <th className="align-middle">
                Total
              </th>
              <td align="right" className="align-middle">
                ${this.state.total.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  commandes: state.facturesReducer.panierArchive,
  soldeVendeur: state.vendeurSoldeReducer.soldeVendeur
})

export default connect(mapStateToProps, {getArchiveCommandes, getSoldeVendeur})(Commandes);