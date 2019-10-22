import React from "react";
import NavBar from "../components/NavBar";
import ExecuteOrders from "../components/ExecuteOrders"
import GetOrders from "../components/GetOrders"
import GetPositions from "../components/GetPositions"
import Footer from "../components/Footer";

var getPositionsAndTradesStyle = {
  width: "100%",
  minHeight: "50vh",
  display: "-webkit-inline-box",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 15px 15px 15px",
  margin: "0px",
  background: "#f2f2f2",
}

var executeTradesStyle = {
  width: "100%",
  minHeight: "50vh",
  display: "-webkit-inline-box",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "30px",
  paddingRight: "15px",
  paddingBottom: "0px !important",
  paddingLeft: "15px",
  margin: "0px",
  background: "#f2f2f2",
}

class App extends React.Component {
  render() {
    return (
      <div >
        <NavBar />
        <siv className="row" style={executeTradesStyle}>
          <div className="col-12">
            <ExecuteOrders />
          </div>
        </siv>
        <div className="row" style={getPositionsAndTradesStyle}>
          <div className="col-6">
            <GetPositions />
          </div>
          <div className="col-6">
            <GetOrders />
          </div>
        </div>
        <p style={{ background: "#f2f2f2" }}>&nbsp;</p>
        <p style={{ background: "#f2f2f2" }}>&nbsp;</p>
        <hr />
        <Footer />
      </div>
    )
  }
}

export default App;