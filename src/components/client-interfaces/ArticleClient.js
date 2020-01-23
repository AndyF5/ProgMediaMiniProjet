import React from "react";

import { addToPanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import { Button, Form, Card, Alert } from "react-bootstrap";

import { FiDelete, FiEdit } from "react-icons/fi"; 
import { MdAddShoppingC } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

class ArticleClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantite: 0,
      show: false,
      added: 0
    }
  }

  handleChange = (e) => {
    if (e.target.value >= 0 && e.target.value % 1 == 0 ){
      this.setState({
        quantite: e.target.value
      });
    }
  }

  handleSubmit = (e) => {
    if (this.state.quantite > 0) {
      this.props.addToPanier(this.props.article.id, this.state.quantite)
      this.setState({
        show: true,
        added: this.state.quantite,
        quantite: 0})
    }
  }

  render() {
    return (
      <Card style={{ width: '15rem' }} className="m-2">
        <Card.Img variant="top" src={this.props.article.imageURL} className="thumbnail" />
        <Card.Body>
          <Card.Title>{this.props.article.title}</Card.Title>
          <Card.Text>
            <b>Prix Unitaire</b>
            <br/>
            ${(this.props.article.prixUnitaire).toFixed(2)}
            
          </Card.Text>
          {this.state.show ? <Alert variant="success" className="mt-2 mb-0" onClose={() => this.setState({show: false})} dismissible>{this.state.added} {this.props.article.title} ajouté à votre panier!</Alert> : null}
        </Card.Body>
        <Card.Footer>
            <table className="w-100">
              <tbody>
              <tr>
                <td className="w-75 px-2">
                  <Form.Control type="number" min="0" step="1" value={this.state.quantite} onChange={this.handleChange}/>
                </td>
                <td className="w-25 px-2">
                  <Button variant="outline-success" className="" onClick={this.handleSubmit}>
                    <FaCartPlus />
                  </Button>
                </td>
              </tr>
              </tbody>
            </table>
          </Card.Footer>
      </Card>
    );
  }
}
export default connect(null, { addToPanier })(ArticleClient);

{/*
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
      */}