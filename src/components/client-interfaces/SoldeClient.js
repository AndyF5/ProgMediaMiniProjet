import React from "react";

import { Table, Row, Col, Form, Button, Badge, Alert } from "react-bootstrap";

import { getSolde, addToSolde } from "../../actions/clientActions";
import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

class SoldeClient extends React.Component {
  state = {
    montantToAdd: 0,
    show: false,
    added: 0
  }

  componentDidMount() {
    this.props.getSolde();
  }

  handleChange = (e) => {
    this.setState({
      montantToAdd: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.addToSolde(1, this.state.montantToAdd);
    this.setState({
      show: true,
      added: this.state.montantToAdd,
      montantToAdd: 0
    })
  }

  render() {
    return(
      <div>
        <Row>
          <Col md="3">
            <dl>
              <dt>Solde:</dt>
              <dd className="">
              <h3 className="mt-1"><Badge variant="success">${(this.props.soldes.find(solde => solde.id == 1).montant).toFixed(2)}</Badge></h3>
              </dd>
            </dl>
          </Col>
          
        </Row>
        <hr />
        <Row>
          <Col>
            <Form>
            <Form.Group>
              <Form.Label>Ajouter à votre solde</Form.Label>
              <Row>
                <Col sm="4">
                  <Form.Control type="number" value={this.state.montantToAdd} onChange={this.handleChange}></Form.Control>
                </Col>
                <Col sm="2" className="d-flex justify-content-center align-items-stretch">
                  <Button variant="outline-success" onClick={this.handleSubmit}>
                    <h6 className="m-0"><FaPlus /></h6>
                  </Button>
                </Col>
                </Row>
            </Form.Group>
            </Form>
            </Col>
        </Row>
            
        {this.state.show ? <Alert variant="success" onClose={() => this.setState({show: false})} dismissible>${this.state.added} ajouté à votre solde!</Alert> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  soldes: state.clientReducer.soldes
});

export default connect(mapStateToProps, { getSolde, addToSolde })(SoldeClient);