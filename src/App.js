import React from "react";
import "./App.scss";
import Routes from "./routes";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="app-main">
      <Nav />
      <div style={{width: "100%"}}>{Routes}</div>
    </div>
  );
}

export default App;
