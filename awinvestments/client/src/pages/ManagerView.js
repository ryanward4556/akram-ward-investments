import React from "react";
import NavBar from "../components/NavBar";
import ModelPortfolioTable from "../components/ModelPortfolioTable";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <ModelPortfolioTable>
        </ModelPortfolioTable>
        <Footer />
      </>
    )
  }
}

export default App;