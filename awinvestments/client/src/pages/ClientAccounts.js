import React from "react";
import NavBar from "../components/NavBar";
// import ExecuteOrders from "../components/ExecuteOrders"
import GetOrders from "../components/GetOrders"
import GetPositions from "../components/GetPositions"
import Footer from "../components/Footer";

var containerStyle = {
  width: "100%",
  minHeight: "50vh",
  display: "-webkit-inline-box",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 15px 15px 15px",
  margin: "0px",
  background: "#f2f2f2",
}

class App extends React.Component {
  render() {
    return (
      <div >
        <NavBar />
        <div className="row" style={containerStyle}>
          <div className="col-6">
            <GetPositions />
          </div>
          <div className="col-6">
            <GetOrders />
          </div>
          {/* <div className="col-4">
            <ExecuteOrders />
          </div> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;