import React, { Component } from "react";
import API from "../../Utilities-ExecuteOrders/API";
import { Container, Row } from "../Grid";
import "./style.css";

var wrapStyle = {
  width: "1120px",
  background: "#fff",
  flexWrap: "wrap",
  alignItems: "stretch",
  flexDirection: "row-reverse"
}

var formStyle = {
  flexWrap: "wrap",
  margin: "0 auto",
  padding: "56px 55px 63px 55px"
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
  marginTop: "-2rem",
  marginBottom: "2rem",
  color: "green",
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
      <div className="container-contact100 row">
        <div className="col-12" style={wrapStyle}>
          <form style={formStyle}>
            <Container>
              <h4 className="text-center" style={h4Style}>Execute Trades</h4>
              <Row>
                <label className="label-input50">Enter Stock Symbol</label>
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
                <label className="label-input50">Enter Quantity to Trade</label>
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
                <label className="label-input50" for="first-name">select Trade Type</label>
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
                >TRADE</button>
              </Row>
            </Container>
          </form>
        </div>
      </div>


    )
  }
}

export default ExecuteOrders;
