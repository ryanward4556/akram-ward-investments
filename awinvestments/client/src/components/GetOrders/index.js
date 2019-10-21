import React, { Component } from "react";
const Alpaca = require("@alpacahq/alpaca-trade-api")
const alpaca = new Alpaca({
  keyId: 'PKNI07BAO6K8Y3JXZT1G',
  secretKey: 'Hl59Yy66hxNBPMCjNJm7bZ/KcE3iz58VQKHfyzRk',
  paper: true,
})

var wrapStyle = {
  background: "#fff",
  paddingRight: "50px",
  paddingLeft: "50px",
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

class App extends React.Component {
  state = {
    orders: [],
    positions: [],
  }

  componentDidMount() {
    alpaca.getOrders({
      status: 'open' && 'filled',
      direction: 'desc'
    })
      .then(response => {
        this.setState(() => {
          console.log(response)
          return { orders: response }
        })
      })

    alpaca.getPositions()
      .then(response => {
        this.setState(() => {
          console.log(response)
          return { positions: response }
        })
      })
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

