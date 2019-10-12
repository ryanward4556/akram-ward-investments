import React from "react";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import Footer from "../components/Footer";

class App extends React.Component {
  state = {
    username = "",
    password = ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <>
        <NavBar />
        <Login
          username={this.username}
          password={this.password}
          onClick={this.handleFormSubmit}
          onChange={this.handleInputChange}
        />
        <Footer />
      </>
    )
  }
}

export default App;