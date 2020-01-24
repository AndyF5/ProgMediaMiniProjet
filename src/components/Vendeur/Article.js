import React from "react";

import { FaTrash } from "react-icons/fa";
import { GiCardExchange } from "react-icons/gi";
//import InputAdornment from '@material-ui/core/InputAdornment';

import { modifyArticle, removeArticle } from "../../actions/vendeurActions";
import { Button, Row } from "react-bootstrap";
import { connect } from "react-redux";

class Article extends React.Component {
  state = {
    title: this.props.article.title,
    price: this.props.article.price
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

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        </td>
        <td>
          <Row>
            <span>$</span>
            <input
              type="number"
              className="form-control col-10"
              //startAdornment={<InputAdornment position="start">$</InputAdornment>}
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </Row>
        </td>
        <td>
          <Button
            variant="success"
            onClick={() =>
              this.props.modifyArticle(
                this.props.article.id,
                this.state.title,
                this.state.price
              )
            }
          >
            <GiCardExchange />
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            className="float-right"
            onClick={() => this.props.removeArticle(this.props.article.id)}
          >
            <FaTrash />
          </Button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

export default connect(mapStateToProps, { modifyArticle, removeArticle })(
  Article
);
