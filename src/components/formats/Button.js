import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize, resume }) => {
  return <button className="btn--primary" onClick={()=> {window.open(resume)}}>{children}</button>;
};

export default Button;
