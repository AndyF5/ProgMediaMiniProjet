import React from "react";

import { FaPlus } from "react-icons/fa";

import { addArticle } from "../../actions/vendeurActions";
import { connect } from "react-redux";
import { Button, Table } from "react-bootstrap";

class AddArticle extends React.Component {
  state = {
    title: "",
    price: ""
  };

  onChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onChangePrice = e => {
    this.setState({
      price: e.target.value
    });
  };

  onClick = () => {
    this.props.addArticle(this.state.title, this.state.price);

    this.setState({ title: "", price: "" });
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
                value={this.state.price}
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

export default connect(null, { addArticle })(AddArticle);
