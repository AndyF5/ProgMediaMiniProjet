import React from "react";

import { FaPlus } from "react-icons/fa";

import { addPanier } from "../../actions/clientActions";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";

class AddPanier extends React.Component {
  state = {
    id: this.props.article.id_p,
    title: this.props.article.title_p,
    price: this.props.article.price_p,
    quantite_p: ""
  };

  onClick = () => {
    this.props.addPanier(this.state.title_p, this.state.price_p,this.state.quantite_p);

    this.setState({ quantite_p: "" });
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
                value={this.state.title_p}
                onChange={this.onChangeTitle}
              />
            </td>
            <td>
              <input
                type="number"
                className="form-control"
                placeholder="Entrer prix de l'article'"
                value={this.state.price_p}
                onChange={this.onChangePrice}
              />
            </td>
            <td>
              <Button
                variant="primary"
                type="submit"
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

export default connect(null, { addPanier })(AddPanier);
