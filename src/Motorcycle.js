import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Motorcycle = ({ id, make, model, year, imageURL }) => (
  <div className="card">
    <Link to={`/information/${id}`}>
      <img className="card-img-top" src={imageURL} alt="Motorcycle poster" />{" "}
    </Link>
    <div className="card-body">
      <h5 className="card-title">{make}</h5>
      <h5 className="card-title">{model}</h5>
      <small className="text-muted">{year}</small>
    </div>
  </div>
);

export default Motorcycle;
