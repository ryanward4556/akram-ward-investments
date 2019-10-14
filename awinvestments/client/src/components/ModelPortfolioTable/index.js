import React from "react";
import ModelPortfolioData from "../ModelPortfolioData";
import valueStocks from "../ModelPortfolioData/value-stocks.json"
import growthStocks from "../ModelPortfolioData/growth-stocks.json"

function ModelPortfolioTable(props) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          <div className="col-6" id="value-strategy">
            <table className="table table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Security Name</th>
                  <th scope="col">Ticker</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {valueStocks.map(stock => {
                  return (
                    <ModelPortfolioData
                      key={stock.id}
                      id={stock.id}
                      name={stock.name}
                      symbol={stock.symbol}
                      weight={stock.weight}
                    />)
                }
                )}
              </tbody>
            </table>
          </div>
          <div className="col-6" id="growth-strategy">
            <table className="table table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Security Name</th>
                  <th scope="col">Ticker</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {growthStocks.map(stock => {
                  return (
                    <ModelPortfolioData
                      key={stock.id}
                      id={stock.id}
                      name={stock.name}
                      symbol={stock.symbol}
                      weight={stock.weight}
                    />)
                }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div >
      <div className="col-4">
      </div>
    </div >
  );
}

export default ModelPortfolioTable;
