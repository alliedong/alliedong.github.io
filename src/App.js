import React from "react";
import Navbar from "./components/formats/Navbar";
import "./App.css";
import MainSite from "./components/Pages/MainSite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/styles/Button.css";

import Error404 from "./components/Pages/Error404";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainSite} />
          <Route path="/*" element={<Error404 />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
