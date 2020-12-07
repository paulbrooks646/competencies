import React from "react";
import "./App.scss";
import Routes from "./routes";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="app-main">
      <Nav />
      <div style={{ width: "100%", position: "relative", top: "30px" }}>{Routes}</div>
    </div>
  );
}

export default App;
