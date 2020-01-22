import React from "react";

import { FaPlus } from "react-icons/fa";

import { addProduit } from "../actions/produitActions";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";

class AddProduit extends React.Component {
  state = {
    title: "",
    prix: ""
  };
  state = {
    
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onChangePrix = e => {
    this.setState({
      prix: e.target.value
    });
  };

  onClick = e => {
    if (this.state.title && this.state.prix) {
      this.props.addProduit(this.state.title, this.state.prix);
    }
    this.setState({ title: "", prix: "" });
  };

  render() {
    return (
      <Table borderless>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Entrer titre de l'article"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                placeholder="Entrer prix de l'article'"
                value={this.state.prix}
                onChange={this.onChangePrix}
              />
            </td>

            <td>
              <Button
                variant="primary"
                className="float-right"
                onClick={this.onClick}
              >
                <FaPlus />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default connect(null, { addProduit })(AddProduit);
