import React from "react";
import HomeLanding from "../formats/HomeLanding";
import Cards from "../formats/Cards";
import "../formats/Cards";
import "../styles/HomeLanding.css";
import "../styles/Button.css";

function MainSite() {
  return (
    <>
      <HomeLanding />
      <Cards />
    </>
  );
}

export default MainSite;
