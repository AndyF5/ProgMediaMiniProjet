import React from "react";
import { Card, Table, Button, Badge } from "react-bootstrap";

import {
  getArticles,
  createFacture,
  addToSoldeVendeur
} from "../../actions/vendeurActions";
import {
  getSolde,
  subtractFromSolde,
  archivePanier,
  emptyPanier
} from "../../actions/clientActions";
import { connect } from "react-redux";
import { MdPayment } from "react-icons/md";

import { Redirect } from "react-router-dom";

class Facture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      reset: false
    };
  }

  componentDidMount() {
    this.props.getArticles();
    this.props.getSolde();

    var newTotal = 0;

    this.props.panier.map(
      item =>
        (newTotal +=
          item.quantite *
          this.props.articles.find(element => {
            return element.id == item.articleID;
          }).prixUnitaire)
    );

    this.setState({
      total: newTotal
    });
  }

  handlePayment = e => {
    if (
      this.state.total < this.props.soldes.find(solde => solde.id == 1).montant
    ) {
      this.props.subtractFromSolde(1, this.state.total * 1.15);
      this.props.createFacture(this.props.panier);
      this.props.archivePanier(this.props.panier, this.state.total * 1.15);
      this.props.addToSoldeVendeur(this.state.total * 0.12);
      this.props.emptyPanier();
      this.setState({
        reset: true
      });
    } else {
      alert("Vous n'avez pas assez d'argent dans votre solde.");
    }
  };

  render() {
    return (
      <Card>
        <Card.Header as="h5">Facture</Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th className="w-25">Title</th>
                <th className="w-25">Quantité</th>
                <th className="w-25">Prix Unitaire</th>
                <th className="w-25">Sous-Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.panier.map(item => {
                return (
                  <tr key={item.id}>
                    <td className="align-middle">
                      {
                        this.props.articles.find(element => {
                          return element.id == item.articleID;
                        }).title
                      }
                    </td>
                    <td align="right" className="align-middle">
                      {item.quantite}
                    </td>
                    <td align="right" className="align-middle">
                      {this.props.articles
                        .find(element => {
                          return element.id == item.articleID;
                        })
                        .prixUnitaire.toFixed(2)}
                    </td>
                    <td align="right" className="align-middle">
                      {(
                        item.quantite *
                        this.props.articles.find(element => {
                          return element.id == item.articleID;
                        }).prixUnitaire
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <th className="align-middle">Total avant taxes:</th>
                <td align="right" className="align-middle">
                  ${this.state.total.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <th className="align-middle">Taxes:</th>
                <td align="right" className="align-middle">
                  ${(this.state.total * 0.15).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <th className="align-middle border-top border-bottom border-dark">
                  Total:
                </th>
                <td
                  align="right"
                  className="align-middle border-top border-bottom border-dark"
                >
                  ${(this.state.total * 1.15).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="border-top-0"></td>
                <td className="border-top-0"></td>
                <td colSpan="2" className="px-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span>Votre solde:</span>
                      <h4 className="mt-1">
                        <Badge variant="success">
                          $
                          {this.props.soldes
                            .find(solde => solde.id == 1)
                            .montant.toFixed(2)}
                        </Badge>
                      </h4>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="ml-2 py-1 d-flex align-items-center"
                      onClick={this.handlePayment}
                    >
                      <span>Payer avec votre solde</span>{" "}
                      <h3 className="mb-0 text-nowrap">
                        <MdPayment />
                      </h3>
                    </Button>
                  </div>
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
  articles: state.articleReducer.articles,
  soldes: state.clientSoldeReducer.soldes
});

export default connect(mapStateToProps, {
  getArticles,
  getSolde,
  subtractFromSolde,
  createFacture,
  archivePanier,
  addToSoldeVendeur,
  emptyPanier
})(Facture);
