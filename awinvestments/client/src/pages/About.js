import React from "react";
import NavBar from "../components/NavBar";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <AboutCompany />
        <Footer />
      </div>
    )
  }
}

export default App;