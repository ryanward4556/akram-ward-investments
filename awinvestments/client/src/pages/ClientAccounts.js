import React from "react";
import NavBar from "../components/NavBar";
import ExecuteOrders from "../components/ExecuteOrders"
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ExecuteOrders />
        <Footer />
      </div>
    )
  }
}

export default App;