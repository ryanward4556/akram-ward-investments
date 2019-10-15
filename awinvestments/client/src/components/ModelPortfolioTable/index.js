import React from "react";
import "./style.css";
import ModelValuePortfolioData from "../ModelValuePortfolioData";
import ModelGrowthPortfolioData from "../ModelGrowthPortfolioData";
import valueStocks from "../ModelValuePortfolioData/value-stocks.json"
import growthStocks from "../ModelGrowthPortfolioData/growth-stocks.json"

var investmentStyle = {
  color: "green",
  fontFamily: "Orbitron",
  paddingTop: "2rem"
}

var pStyle = {
  fontFamily: 'Orbitron',
  fontSize: "18px",
  paddingBottom: "0.5rem"
}

var thStyle = {
  fontFamily: 'Orbitron',
  margin: "0 !important",
  paddingTop: "0.4rem !important",
  paddingBottom: "0.1rem !important"

}

function ModelPortfolioTable(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-5 offset-1" id="value-strategy">
            <h4 className="text-center">A&W large cap <span style={investmentStyle}>value</span></h4>
            <p className="text-center" style={pStyle}> Model Strategy Holdings</p>
            <table className="table table-sm" border="1">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" style={thStyle}>Security Name</th>
                  <th scope="col" style={thStyle}>Ticker</th>
                  <th scope="col" style={thStyle}>Weight</th>
                  <th scope="col" style={thStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {valueStocks.map(stock => {
                  return (
                    <ModelValuePortfolioData
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
          <div className="col-5" id="growth-strategy">
            <h4 className="text-center">A&W large cap <span style={investmentStyle}>growth</span></h4>
            <p className="text-center" style={pStyle}> Model Strategy Holdings</p>
            <table className="table table-sm" border="1">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" style={thStyle}>Security Name</th>
                  <th scope="col" style={thStyle}>Ticker</th>
                  <th scope="col" style={thStyle}>Weight</th>
                  <th scope="col" style={thStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {growthStocks.map(stock => {
                  return (
                    <ModelGrowthPortfolioData
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
    </div >
  );
}

export default ModelPortfolioTable;
