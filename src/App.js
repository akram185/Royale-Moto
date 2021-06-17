import React from "react";
import { Route } from "react-router-dom";
import { tracer } from "dd-trace";


import CreateMotorcycle from "./CreateMotorcycle";
import Home from "./Home";
import Information from "./Information";
import "./App.css";
import Nav from "./Nav";
import track from "./track.jpg";

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'ef070bfe-86b5-4df4-a3a2-25eb4201510a',
    clientToken: 'pubcd2a5324e8caa431c5cfe5190ed50c5d',
    site: 'datadoghq.com',
    service:'royalemoto',
    env:'production',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true
});

tracer = require('dd-trace').init()

// const tracer = require('dd-trace').init()
//  const span = tracer.scope().active()
  

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
      <footer>
        <p>
          © Developed by Waseem Mohammed, 2020 | Powered by{" "}
          <a href="https://airtable.com/tblHhxL6KnP5ie5PC/viwqjI8MIMAF39TKd?blocks=hide">
            Royale Moto's Airtable
          </a>{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
