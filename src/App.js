import React, { Component } from "react"
import axios from "axios"


class App extends Component {
  constructor() {
    super();
    this.state = {
      motorcycles: [],
    };
  }
  async componentDidMount() {
    const data = await axios("https://api.airtable.com/v0/appBcQntEGzgoK1Ad/favorites?api_key=keyzDeexKzGh6V5pz")
      
    this.setState({
      motorcycles: data.data.records
    })
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              {this.state.motorcycles.map((motorcycle) => (
                <MotorCycleCard {...motorcycle.fields} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const MotorCycleCard = ({
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
      src={imageURL[0].url}
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
