import React, { Component } from "react";


var wrapStyle = {
  background: "#fff",
  paddingRight: "50px",
  paddingLeft: "50px",
  paddingBottom: "25px"
}

var thStyle = {
  fontFamily: 'Orbitron',
  paddingTop: "0.4rem !important",
  paddingBottom: "0.1rem !important",
  fontSize: "12px",
}

var h4Style = {
  color: "green",
  paddingTop: "2rem",
  paddingBottom: "2rem"
}

class App extends React.Component {
  state = {
    orders: []
  }

  async componentDidMount() {

    const ordersUrl = `https://paper-api.alpaca.markets/v2/orders?status=filled&direction=desc`;
    const getOrders = await fetch(ordersUrl, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "APCA-API-KEY-ID": "PKNI07BAO6K8Y3JXZT1G",
        "APCA-API-SECRET-KEY": "Hl59Yy66hxNBPMCjNJm7bZ/KcE3iz58VQKHfyzRk"
      },
    });
    const ordersResponse = await getOrders.json();
    console.log('ordersResponse', ordersResponse);
    this.setState({ orders: ordersResponse })
  }

  render() {
    return (
      <div >
        <div style={wrapStyle}>
          <h4 className="text-center" style={h4Style}>Order History</h4>
          <table className="table table-sm" border="1">
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={thStyle}>Stock</th>
                <th scope="col" style={thStyle}>Order Type</th>
                <th scope="col" style={thStyle}>Shares</th>
                <th scope="col" style={thStyle}>Average Price</th>
                <th scope="col" style={thStyle}>Total Cost</th>
                <th scope="col" style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orders.map(order => {
                return (
                  <tr>
                    <td>{order.symbol}</td>
                    <td>{order.side}</td>
                    <td>{order.qty}</td>
                    <td>${(order.filled_avg_price * 1).toFixed(2)}</td>
                    <td>${(order.qty * order.filled_avg_price).toLocaleString()}</td>
                    <td>{order.status}</td>
                  </tr>)
              }
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;

