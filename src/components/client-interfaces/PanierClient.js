import React from "react";
import { Table } from "react-bootstrap";

import { getArticles } from "../../actions/vendeurActions";
import { getPanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import ArticleClient from "./ArticleClient";

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

  render() {
    return(
      <div>
        <Table>
          <tbody>
            {this.props.panier.map(item => {
              <tr><td>{item.toString}</td></tr>
            })}
          </tbody>
        </Table>
        <hr />
        <Table>
          <tbody>
            <tr>
              <th>Total avant taxes:</th>
              <td>${this.state.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  panier: state.clientReducer.panier,
  articles: state.vendeurReducer.articles
});

export default connect(mapStateToProps, { getPanier, getArticles })(PanierClient);