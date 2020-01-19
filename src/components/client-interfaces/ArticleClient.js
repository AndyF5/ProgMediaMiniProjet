import React from "react";

import { addToPanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

import { FiDelete, FiEdit } from "react-icons/fi"; 
import { MdAddShoppingC } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

class ArticleClient extends React.Component {
  render() {
    return (
      <tr>
        <td className="w-50 align-middle">
          {this.props.article.title}
        </td>
        <td align="right" className="w-25 align-middle">
          ${this.props.article.prixUnitaire.toFixed(2)}
        </td>
        <td className="align-middle">
          <Form.Control type="number" min="0"/>
        </td>
        <td className="align-middle">
          <Button variant="outline-success" className="m-auto d-block">
            <FaCartPlus />
          </Button>
        </td>
      </tr>
    );
  }
}
export default connect(null, { addToPanier })(ArticleClient);