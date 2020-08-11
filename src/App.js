import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import SectionNav from "./components/SectionNav";
import MyReact from "./components/MyReact";
import Javascript from "./components/Javascript";
import Clone from "./components/Clone";
import Css from "./components/Css";

function App() {
  return (
    <>
      <Router>
        <SectionNav />

        <Switch>
          <Route path="/react" component={MyReact} />
          <Route path="/javascript" component={Javascript} />
          <Route path="/css" component={Css} />
          <Route path="/clone" component={Clone} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
