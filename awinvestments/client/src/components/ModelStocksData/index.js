import React from "react";
import "./style.css";
import API from "../../utils";


class ModelStocksData extends React.Component {
  state = {
    price: ""
  }

  async componentDidMount() {
    await this.getStockInfo(this.props.symbol)
  }

  getStockInfo = symbol => {
    API.search(symbol)
      .then(response => {
        this.setState(() => {
          return { price: response.data.latestPrice }
        })
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.symbol}</td>
        <td>{this.props.weight + " %"}</td>
        <td>{"$" + this.state.price}</td>
      </tr>
    )

  }
}

export default ModelStocksData;