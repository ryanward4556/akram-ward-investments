import React from "react";
import "./style.css";
import API from "../../Utilities-GrowthStocks/API";


class ModelGrowthPortfolioData extends React.Component {
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

export default ModelGrowthPortfolioData;