import React from "react";
import { Route } from "react-router-dom";

import CreateMotorcycle from "./CreateMotorcycle";
import Home from "./Home";
import Information from "./Information";
import "./App.css";
import Nav from "./Nav";
import track from "./track.jpg";

function App() {
  return (
    <>
      <div
        styles={{
          backgroundImage: `URL(${track})`,
        }}
      ></div>
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/collection" exact>
        <CreateMotorcycle />
      </Route>
      <Route path="/information/:id">
        <Information />
      </Route>
    </>
  );
}

export default App;
