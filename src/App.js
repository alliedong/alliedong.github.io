import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/styles/Button.css";
import Home from "./components/formats/Home";

import Navbar from "./components/formats/Navbar";
import MainSite from "./components/Pages/MainSite";
import Error404 from "./components/Pages/Error404";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/" exact component={MainSite} />
          <Route path="/*" element={<Error404 />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
