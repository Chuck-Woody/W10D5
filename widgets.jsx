import React from "react";
import ReactDOM from "react-dom";
import Clock from "./frontend/clock";

// let clock = new Clock()

const RootComponent = props => {
  return (
    <Clock/>
  )
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<RootComponent />, root);
}) 