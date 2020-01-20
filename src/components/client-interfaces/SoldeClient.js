import React from "react";

import { Table, Row, Col, Form, Button } from "react-bootstrap";

import { getSolde, addToSolde } from "../../actions/clientActions";
import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";

class SoldeClient extends React.Component {
  state = {
    montantToAdd: 0
  }

  componentDidMount() {
    this.props.getSolde();
  }

  handleChange = (e) => {
    this.setState({
      montantToAdd: e.target.value
    })
  }

  render() {
    return(
      <div>
        <Row>
          <Col md="3">
            <dl>
              <dt>Solde:</dt>
              <dd className="ml-3">
                {console.log(this.props.soldes.find(solde => solde.id == 1))}
              </dd>
            </dl>
          </Col>
          <Col md="9">
            <Form.Group as={Row}>
              <Form.Label column sm="6">Ajouter à votre solde</Form.Label>
              <Col sm="3" >
                <Form.Control type="number" value={this.state.montantToAdd} onChange={this.handleChange}></Form.Control>
              </Col>
              <Col sm="3">
                <Button variant="outline-success" onClick={(() => this.props.addToSolde(1, this.state.montantToAdd))}>
                  <MdAdd />
                </Button>
              </Col>
            </Form.Group>
            
          </Col>
        </Row>
        
            
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  soldes: state.clientReducer.soldes
});

export default connect(mapStateToProps, { getSolde, addToSolde })(SoldeClient);

/*${(this.props.soldes.find(solde => solde.id == 1)).montant.toFixed(2)}*/