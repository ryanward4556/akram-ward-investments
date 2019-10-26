import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from './components/Auth';
import MarketNews from "./pages/MarketNews";
import StrategyOverview from "./pages/StrategyOverview";
import ClientAccounts from "./pages/ClientAccounts";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/market-news" component={MarketNews} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/strategy-overview" component={StrategyOverview} />
        <Route exact path="/client-accounts" component={ClientAccounts} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
