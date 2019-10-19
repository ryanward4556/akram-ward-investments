import React, { Component } from "react";
import API from "../../Utilities-ExecuteOrders/API";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import Button from "../Button";

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
      <div class="row">
        <div class="col-12">
          <form>
            <Container>
              <Row>
                <div className="col-3">
                  <Input
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                    placeholder="Enter Quantity"
                  />
                </div>
                <div className="col-3">
                  <Input
                    name="stock"
                    value={this.state.stock}
                    onChange={this.handleInputChange}
                    placeholder="Enter Stock Symbol"
                  />
                </div>
                <div className="col-3">
                  <Input
                    name="side"
                    value={this.state.side}
                    onChange={this.handleInputChange}
                    placeholder="Buy or Sell"
                  />
                </div>
                <div className="col-3">
                  <Button
                    onClick={this.handleOrderSubmit}
                    type="success"
                    className="input-lg"
                  >Search</Button>
                </div>
              </Row>
            </Container>
          </form>
        </div>
      </div>


    )
  }
}

export default ExecuteOrders;
