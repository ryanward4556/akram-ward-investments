import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from './components/Auth';
import MarketNews from "./pages/MarketNews";
import ManagerView from "./pages/ManagerView";
import Contact from "./pages/Contact";
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
        <Route exact path="/account" component={ManagerView} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
