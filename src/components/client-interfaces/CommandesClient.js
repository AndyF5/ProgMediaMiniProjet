import React from "react";
import { Table } from "react-bootstrap";

import { getArchiveCommandes } from "../../actions/clientActions";
import { connect } from "react-redux";

class CommandesClient extends React.Component {
	componentDidMount() {
		this.props.getArchiveCommandes();
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
							console.log(commande.id)
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	commandes: state.clientReducer.panierArchive
})

export default connect(mapStateToProps, {getArchiveCommandes})(CommandesClient);