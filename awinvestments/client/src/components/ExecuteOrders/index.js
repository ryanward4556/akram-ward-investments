import React, { Component } from "react";
import API from "../../Utilities-ExecuteOrders/API";

class ExecuteOrders extends Component {
    handleOrderSubmit = () => {
        API.submitOrder("1", "MSFT", "buy")
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    };

    render() {
        return (
            <div
                makeOrder={this.handleOrderSubmit()}
            ></div>
        )
    }
}

export default ExecuteOrders;
