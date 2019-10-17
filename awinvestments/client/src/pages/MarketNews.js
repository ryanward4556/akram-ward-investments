import React from "react";
import NavBar from "../components/NavBar";
import MarketNews from "../components/MarketNews";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <MarketNews />
        <Footer />
      </div>
    )
  }
}

export default App;
