import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function Information() {
  const params = useParams();
  const [data, updateData] = useState({});
  console.log(params);
  useEffect(() => {
    const apiCall = async () => {
      const data = await axios(
        `https://api.airtable.com/v0/appBcQntEGzgoK1Ad/favorites/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );

      updateData(data.data);
    };
    apiCall();
  }, []);
  if (data.fields) {
    return (
      <div className="info">
        <div className="card-white-title">
          <h1 className="card-title">{data.fields.make}</h1>
          <h5 className="card-title">
            {data.fields.model} {data.fields.year}
          </h5>
        </div>
        <img
          className="card-img-top"
          src={data.fields.imageURL}
          alt="Motorcycle poster"
        />
        <div className="card-white">
          <p className="card-text">{data.fields.description}</p>
          <p className="card-text">{data.fields.features}</p>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
export default Information;
