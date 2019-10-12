import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Login from "./pages/Login";
// import Account from "./pages/Account";
import NoMatch from "./pages/NoMatch";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/marketnews" component={MarketNews} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/account" component={Account} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
