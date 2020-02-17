import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
