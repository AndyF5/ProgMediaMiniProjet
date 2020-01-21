import React from "react";
import { Card, Table, Button, Badge } from "react-bootstrap";

import { getArticles, createFacture } from "../../actions/vendeurActions";
import { getSolde, subtractFromSolde, archivePanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import { MdPayment } from "react-icons/md";

import { Redirect } from "react-router-dom";

class Facture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      reset: false
    }
  }

  componentDidMount() {
    this.props.getArticles();
    this.props.getSolde();

    var newTotal = 0;

    this.props.panier.map((item) => 
      newTotal += item.quantite * this.props.articles.find((element) => {return element.id == item.articleID}).prixUnitaire * 1.12
    );

    this.setState({
      total: newTotal
    })
  }

  handlePayment = (e) => {
    if(this.state.total < this.props.soldes.find(solde => solde.id == 1).montant){
      this.props.subtractFromSolde(1, this.state.total*1.15*1.12);
      this.props.createFacture(this.props.panier);
      this.props.archivePanier(this.state.total * 1.12 * 1.15);
      this.setState({
        reset: true
      })
    }
    else {
      alert("Vous n'avez pas assez d'argent dans votre solde.");
    }
  }

  render() {
    return (
      <Card>
        <Card.Header>
          Facture
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>
                  Title
                </th>
                <th>
                  Quantité
                </th>
                <th>
                  Prix Unitaire
                </th>
                <th>
                  Sous-Total
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.panier.map((item) => {
                return (
                <tr key={item.id}>
                  <td className="align-middle">
                    {this.props.articles.find((element) => {return element.id == item.articleID}).title}
                  </td>
                  <td align="right" className="align-middle">
                    {item.quantite}
                  </td>
                  <td align="right" className="align-middle">
                    {(this.props.articles.find((element) => {return element.id == item.articleID}).prixUnitaire * 1.12).toFixed(2)}
                  </td>
                  <td align="right" className="align-middle">
                    {(item.quantite * this.props.articles.find((element) => {return element.id == item.articleID}).prixUnitaire * 1.12).toFixed(2)}
                  </td>
                </tr>);
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <th className="align-middle">
                  Total avant taxes:
                </th>
                <td align="right" className="align-middle">
                  ${(this.state.total *1.12).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <th className="align-middle">
                  Taxes:
                </th>
                <td align="right" className="align-middle">
                  ${(this.state.total*0.15 *1.12).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <th className="align-middle border-top border-bottom border-dark">
                  Total:
                </th>
                <td align="right" className="align-middle border-top border-bottom border-dark">
                  ${(this.state.total*1.15 *1.12).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <th className="align-middle d-flex flex-column">
                  <span>Votre solde:</span>
                  <h4 className="mt-1"><Badge variant="success">${(this.props.soldes.find(solde => solde.id == 1).montant).toFixed(2)}</Badge></h4>
                </th>
                <td className="align-middle">
                  <Button variant="outline-primary" className="d-flex align-items-center" onClick={this.handlePayment}><span>Payer avec votre solde</span> <h3 className="mb-0 text-nowrap"><MdPayment /></h3></Button>
                </td>
              </tr>
            </tfoot>
          </Table>
          {this.state.reset ? <Redirect to="/client/solde" /> : null}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.vendeurReducer.articles,
  soldes: state.clientReducer.soldes
});

export default connect(mapStateToProps, { getArticles, getSolde, subtractFromSolde, createFacture, archivePanier })(Facture);