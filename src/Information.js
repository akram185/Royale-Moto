import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function Information() {
  const { id } = useParams();
  const [information, updateInformation] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      const information = await axios(
        `https://api.airtable.com/v0/appBcQntEGzgoK1Ad/favorites/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      console.log(data.data.records);
      updateInformation(information.data);
    };
    apiCall();
  }, [id]);
  if (information.fields) {
    return (
      <div className="card">
        <img className="card-img-top" src={motorcycle.fields.imageURL} alt="Motorcycle poster" />
        <div className="card-body">
          <h5 className="card-title">{motorcycle.fields.make}</h5>
          <h5 className="card-title">{motorcycle.fields.model}</h5>
          <p className="card-text">{motorcycle.fields.description}</p>
          <p className="card-text">{motorcycle.fields.features}</p>
          <small className="text-muted">{motorcycle.fields.year}</small>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
export default Information;
