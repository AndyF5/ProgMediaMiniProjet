import React from "react";
import { Table, Button } from "react-bootstrap";

import { FaList, FaWindowClose } from "react-icons/fa";

import { getArticles } from "../../actions/vendeurActions";
import { connect } from "react-redux";
import { MdClose } from "react-icons/md";

class Commande extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return(
      <tbody>
        <tr>
          <td className="align-middle">
            {this.props.commande.date.toLocaleDateString()} {this.props.commande.date.toLocaleTimeString()}
          </td>
          <td align="right" className="align-middle">
            {this.props.commande.panier.reduce((prev, next) => prev + next.quantite, 0)}
          </td>
          <td align="right" className="align-middle">
            ${this.props.commande.montant.toFixed(2)}
          </td>
          <td align="right">
            <Button variant="outline-primary" onClick={() => (this.setState({display: !this.state.display}))}><FaList /></Button>
          </td>
        </tr>
        {this.state.display ? 
          <tr>
            <td colSpan="4">
              <div className="m-2">
                <Button variant="outline-danger" className="float-right p-0 mb-2" onClick={() => this.setState({display: false})}>
                  <h3 className="mb-0"><MdClose /></h3>
                </Button>
                <Table bordered striped hover>
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Quantité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.commande.panier.map((ligne) => (
                      <tr key={ligne.id}>
                        <td>
                          {this.props.articles.find((element) => {return element.id == ligne.articleID}).title}
                        </td>
                        <td>
                          {ligne.quantite}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </td>
          </tr>
        : null }
      </tbody>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default connect(mapStateToProps, { getArticles })(Commande);