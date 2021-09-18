import React from "react";
import Home from "../formats/Home.js";
import Navbar from "../formats/Navbar";
import "../styles/Home.css";
import "../styles/Button.css";

function MainSite() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default MainSite;
