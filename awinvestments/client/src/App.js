import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/marketnews" component={MarketNews} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/account" component={Account} />
          <Route component={NoMatch} />
        </Switch>
        <CompanyName />
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
