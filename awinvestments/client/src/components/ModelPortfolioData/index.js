import React from "react";
import "./style.css";
import API from "../../utils/API";


class ModelPortfolioData extends React.Component {
  state = {
    price: ""
  }

  componentDidMount() {
    this.getStockInfo(this.props.symbol)
  }

  getStockInfo = symbol => {
    API.search(symbol)
      .then(response => {
        this.setState({ price: response.data.latestPrice })
        console.log(this.state.price)
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

export default ModelPortfolioData;