import React from "react";
import NavBar from "../components/NavBar";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <AboutCompany />
        <Footer />
      </>
    )
  }
}

export default App;