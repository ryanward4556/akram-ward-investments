import React from "react";
import NavBar from "../components/NavBar";
import ExecuteOrders from "../components/ExecuteOrders"
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4">
            <ExecuteOrders />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;