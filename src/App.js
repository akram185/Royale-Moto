import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import axios from "axios";
import Motorcycle from "./Motorcycle";
import CreateMotorcycle from "./CreateMotorcycle";
import Favorites from "./Favorites"
import Home from "./Home";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Royale Moto   </Link>
        <Link to="/">Home   </Link>
        <Link to="/collection">Add to our collection   </Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/collection" exact>
      <CreateMotorcycle/>
      </Route>
      <Route path="/favorites" exact>
      <Favorites />
      </Route>
    </>
  );
}

export default App;
