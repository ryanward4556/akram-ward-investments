import React from "react";
import "./style.css";
import ModelValuePortfolioData from "../PortfolioModelValue";
import ModelGrowthPortfolioData from "../PortfolioModelGrowth";
import valueStocks from "../PortfolioModelValue/value-stocks.json"
import growthStocks from "../PortfolioModelGrowth/growth-stocks.json"

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

var performanceButtonStyle = {
  display: "block",
  margin: "0 auto",
  marginTop: "2rem",
  marginBottom: "2rem",
  backgroundColor: "#00AD5F",
  fontFamily: "Orbitron",
  fontSize: "12px",
  height: "50px",
  color: "white",
  float: "right",
  width: "215px",
  background: "green"
}

var tradingButtonStyle = {
  display: "block",
  margin: "0 auto",
  marginTop: "2rem",
  marginBottom: "2rem",
  backgroundColor: "#00AD5F",
  fontFamily: "Orbitron",
  fontSize: "12px",
  height: "50px",
  color: "white",
  float: "left",
  width: "215px",
  background: "green"
}

function ModelPortfolioTable(props) {
  return (
    <div className="row" style={{ background: "#f2f2f2" }}>
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <button
              style={performanceButtonStyle}
              // onClick={}
              type="success"
              className="btn rounded-0"
            >PERFORMANCE CHARTS</button>
          </div>
          <div className="col-6">
            <div className="jumbotron" style={{ height: 200, clear: "both", paddingTop: 30, textAlign: "center", color: "red" }}>
              <h3>INTERNAL USE ONLY</h3>
              <p className="text-center" style={{ fontFamily: 'Orbitron', fontSize: "14px" }}>Please refer to two model strategies for portfolio construction purposes</p>
              <p className="text-center" style={{ fontFamily: 'Orbitron', fontSize: "14px" }}>Model strategy weights are allocated quarterly - Last allocated: <i>09/30/2019</i></p>
              <p className="text-center" style={{ fontFamily: 'Orbitron', fontSize: "14px" }}>Prices are updated live using the last available quote</p>
            </div>
          </div>
          <div className="col-3">
            <button
              style={tradingButtonStyle}
              // onClick={}
              type="success"
              className="btn rounded-0"
            >TRADING PLATFORM</button>
          </div>
        </div>
        <div className="row">
          <div className="col-5 offset-1" id="value-strategy">
            <h4 className="text-center">A&W large cap <span style={investmentStyle}>value</span></h4>
            <p className="text-center" style={pStyle}> Model Strategy Holdings</p>
            <table className="table table-sm" border="1" style={{ background: "#fff" }}>
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
            <table className="table table-sm" border="1" style={{ background: "#fff" }}>
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
        <p style={{ background: "#f2f2f2" }}>&nbsp;</p>
      </div >
      <p style={{ background: "#f2f2f2" }}>&nbsp;</p>
    </div >
  );
}

export default ModelPortfolioTable;
