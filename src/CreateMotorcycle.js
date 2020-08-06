import React, { useState } from "react";
import axios from "axios";

function CreateMotorcycle(props) {
  const [make, updateMake] = useState("");
  const [model, updateModel] = useState("");
  const [year, updateYear] = useState("");
  const [imageURL, updateImageURL] = useState("");
  const [description, updateDescription] = useState("");
  const [features, updateFeatures] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "https://api.airtable.com/v0/appBcQntEGzgoK1Ad/favorites",
      {
        fields: {
          make: make,
          model: model,
          year: parseInt(year, 10),
          imageURL: imageURL,
          description: description,
          features: features,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    updateMake("");
    updateModel("");
    updateYear("");
    updateImageURL("");
    updateDescription("");
    updateFeatures("");
    // props.getMotorcycles();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="add-moto-title">Add Motorcycle</h2>
      <label htmlFor="make">Make</label>
      <input
        type="text"
        id="make"
        onChange={(e) => updateMake(e.target.value)}
        value={make}
      />
      <label htmlFor="model">Model</label>
      <input
        type="text"
        id="model"
        onChange={(e) => updateModel(e.target.value)}
        value={model}
      />
      <label htmlFor="number">Year</label>
      <input
        type="number"
        id="year"
        onChange={(e) => updateYear(e.target.value)}
        value={year}
      />
      <label htmlFor="imageURL">Image</label>
      <input
        type="text"
        id="image"
        onChange={(e) => updateImageURL(e.target.value)}
        value={imageURL}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        onChange={(e) => updateDescription(e.target.value)}
        value={description}
      />
      <label htmlFor="features">Features</label>
      <input
        type="text"
        id="features"
        onChange={(e) => updateFeatures(e.target.value)}
        value={features}
      />

      <input className="button" type="submit" value="Create Motorcycle" />
    </form>
  );
}

export default CreateMotorcycle;
