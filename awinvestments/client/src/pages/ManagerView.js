import React from "react";
import NavBar from "../components/NavBar";
import ModelPortfolioTable from "../components/ModelPortfolioTable";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ModelPortfolioTable>
        </ModelPortfolioTable>
        <Footer />
      </div>
    )
  }
}

export default App;