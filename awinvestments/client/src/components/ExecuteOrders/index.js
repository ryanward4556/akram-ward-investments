import React, { Component } from "react";
import API from "../../Utilities-Alpaca/API";
import { Row } from "../Grid";
import "./style.css";

var wrapStyle = {
  background: "#fff",
}

var formStyle = {
  padding: "50px"
}

var selectStyle = {
  border: "none",
  width: "100%"
}

var buttonStyle = {
  display: "block",
  margin: "0 auto",
  marginBottom: "-1rem",
  backgroundColor: "#00AD5F",
  fontFamily: "Orbitron",
  fontSize: "12px",
  padding: "0 20px",
  height: "50px",
  color: "white"
}

var h4Style = {
  color: "green",
  paddingTop: "2rem",
  paddingBottom: "2rem"
}

class ExecuteOrders extends Component {
  state = {
    quantity: "",
    stock: "",
    side: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOrderSubmit = event => {
    event.preventDefault();
    API.submitOrder(this.state.quantity, this.state.stock, this.state.side)
  };

  render() {
    return (
      <div >
        <div className="col-12" style={wrapStyle}>
          <h4 className="text-center" style={h4Style}>Execute Trades</h4>
          <form style={formStyle}>
            <Row>
              <label className="label-input50">Stock Symbol</label>
              <div className="wrap-input100">
                <input
                  className="input50"
                  name="stock"
                  value={this.state.stock}
                  onChange={this.handleInputChange}
                  placeholder="Ex: AAPL"
                />
              </div>
            </Row>
            <br />
            <Row>
              <label className="label-input50">Number of Shares</label>
              <div className="wrap-input100">
                <input
                  className="input50"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                  placeholder="Ex: 3"
                />
              </div>
            </Row>
            <br />
            <Row>
              <label className="label-input50" for="first-name">Trade Type</label>
              <div className="wrap-input100">
                <select
                  style={selectStyle}
                  name="side"
                  value={this.state.side}
                  onChange={this.handleInputChange}
                >
                  <option selected>Ex: Buy or Sell</option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                </select>
              </div>
            </Row>
            <br />
            <Row>
              <button
                style={buttonStyle}
                onClick={this.handleOrderSubmit}
                type="success"
                className="btn rounded-0"
              >EXECUTE TRADE</button>
            </Row>
          </form>
        </div>
      </div>


    )
  }
}

export default ExecuteOrders;
