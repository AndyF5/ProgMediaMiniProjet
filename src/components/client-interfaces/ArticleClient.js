import React from "react";

import { addToPanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

import { FiDelete, FiEdit } from "react-icons/fi"; 
import { MdAddShoppingC } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

class ArticleClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantite: 0
    }
  }

  handleChange = (e) => {
    if (e.target.value >= 0 && e.target.value % 1 == 0 ){
      this.setState({
        quantite: e.target.value
      });
    }
  }

  render() {
    return (
      <tr>
        <td className="w-50 align-middle">
          {this.props.article.title}
        </td>
        <td align="right" className="w-25 align-middle">
          ${(this.props.article.prixUnitaire).toFixed(2)}
        </td>
        <td className="align-middle">
          <Form.Control type="number" min="0" step="1" value={this.state.quantite} onChange={this.handleChange}/>
        </td>
        <td className="align-middle">
          <Button variant="outline-success" className="m-auto d-block" onClick={() => this.state.quantite > 0 ? this.props.addToPanier(this.props.article.id, this.state.quantite): null}>
            <FaCartPlus />
          </Button>
        </td>
      </tr>
    );
  }
}
export default connect(null, { addToPanier })(ArticleClient);