import React from "react";
import "./App.scss";

function Box() {
  return (
    <form className="box" action="http://localhost:3000/upload" method="PUT">
      <input type="file" id="myFile" name="filename" />
    </form>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>Outfit Vizualizer</h1>
      <Box />
      <h2>TOP</h2>
      <Box />
      <h2>PANTS</h2>
      <Box />
      <h2>SHOES</h2>
      <form action="http://localhost:3000/upload" method="PUT">
        <input className="button success" type="submit" name="submit" value="SUBMIT"/>
      </form>
    </div>
    );
}

