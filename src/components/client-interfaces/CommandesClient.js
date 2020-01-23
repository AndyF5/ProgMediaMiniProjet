import React from "react";
import { Table } from "react-bootstrap";

import { getArchiveCommandes } from "../../actions/clientActions";
import { connect } from "react-redux";
import Commande from "./Commande";

class CommandesClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      items: 0
    }
  	}

	componentDidMount() {
    this.props.getArchiveCommandes();
    
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
				<Table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Items</th>
							<th>Montant</th>
						</tr>
					</thead>
					<tbody>
						{this.props.commandes.map((commande) => (
							<Commande key={commande.id} commande={commande}/>
						))}
					</tbody>
					<tfoot>
						<tr>
              <td className=""></td>
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
	commandes: state.facturesReducer.panierArchive
})

export default connect(mapStateToProps, {getArchiveCommandes})(CommandesClient);