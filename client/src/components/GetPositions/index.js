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
    orders: [],
    positions: [],
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
        this.setState({orders : ordersResponse })

        const positionsUrl = `https://paper-api.alpaca.markets/v2/positions`;
        const getPositions = await fetch(positionsUrl, {
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
        const positionsResponse = await getPositions.json();
        console.log('positionsResponse', positionsResponse);
        this.setState({positions : positionsResponse })
  }

  render() {
    return (
      <div >
        <div style={wrapStyle}>
          <h4 className="text-center" style={h4Style}>Portfolio Positions</h4>
          <table className="table table-sm" border="1">
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={thStyle}>Stock</th>
                <th scope="col" style={thStyle}>Price</th>
                <th scope="col" style={thStyle}>Shares</th>
                <th scope="col" style={thStyle}>Original Cost</th>
                <th scope="col" style={thStyle}>Market Value</th>
                <th scope="col" style={thStyle}>Total Profit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.positions.map(position => {
                return (
                  <tr>
                    <td>{position.symbol}</td>
                    <td>{position.current_price}</td>
                    <td>{position.qty}</td>
                    <td>${(position.cost_basis * 1).toLocaleString()}</td>
                    <td>${(position.market_value * 1).toLocaleString()}</td>
                    <td>${((((position.market_value * 1) - (position.cost_basis * 1))).toFixed(2)).toLocaleString()}</td>
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

