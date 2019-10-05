import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import CompanyName from "./components/CompanyName";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <CompanyName />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
