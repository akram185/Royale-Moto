import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import axios from "axios";
import Motorcycle from "./Motorcycle";
import CreateMotorcycle from "./CreateMotorcycle";
// import Favorites from "./Favorites";
import Home from "./Home";
import Information from "./Information";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link className="royale" to="/">Royale Moto </Link>
        <Link className="home" to="/">Home </Link>
        <Link className="collection" to="/collection">Add to our collection </Link>
        <Link className="favorites" to="/favorites">Favorites</Link>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/collection" exact>
        <CreateMotorcycle />
      </Route>
      <Route path="/favorites" exact>
        {/* <Favorites /> */}
      </Route>
      <Route path="/information/:id">
        <Information />
      </Route>
    </>
  );
}

export default App;
