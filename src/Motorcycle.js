import React from "react"


const Motorcycle = ({
  make,
  model,
  year,
  description,
  imageURL,
  features,
}) => (
  <div className="card">
    <img
      className="card-img-top"
      src={imageURL}
      alt="Motorcycle poster"
    />
    <div className="card-body">
      <h5 className="card-title">{make}</h5>
      <h5 className="card-title">{model}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">{features}</p>
      <small className="text-muted">{year}</small>
    </div>
  </div>
  );

  export default Motorcycle