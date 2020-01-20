import React from "react";

import { Table, Button } from "react-bootstrap";

import { getArticles } from "../../actions/vendeurActions";
import { getPanier, createFacture } from "../../actions/clientActions";
import { connect } from "react-redux";

import LinePanier from "./LinePanier";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowRight, MdShoppingCart } from "react-icons/md";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Facture from "./Facture";


class PanierClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  componentDidMount(){
    this.props.getPanier();
    this.props.getArticles();
    var newTotal = 0;
    this.props.panier.map((item) => 
      newTotal += item.quantite * this.props.articles.find((element) => {return element.id == item.articleID}).prixUnitaire
    );

    this.setState({
      total: newTotal
    });
  }

  handleClick = (e) => {
    this.props.createFacture(this.props.panier);
    this.props.history.push(`client/panier/facture`);
  }

  render() {
    return(
      <div>
        <Router>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Quantité</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.panier.map(item => (
                <LinePanier key={item.id} item={item} />
              ))}
            </tbody>
          </Table>
          <hr />
          <Table borderless>
            <tbody>
              <tr>
                <th>Total avant taxes:</th>
                <td align="right">${this.state.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="outline-success" className="float-right" onClick={this.handleClick}>
            Passer la commande <MdShoppingCart /> <MdKeyboardArrowRight />
          </Button>
          <Route path="/client/panier/facture">
            <Facture panier={this.props.panier} />
          </Route>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  panier: state.clientReducer.panier,
  articles: state.vendeurReducer.articles
});

export default connect(mapStateToProps, { getPanier, getArticles, createFacture })(PanierClient);