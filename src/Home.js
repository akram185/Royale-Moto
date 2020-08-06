import React, { Component } from "react";
import axios from "axios";
import Motorcycle from "./Motorcycle";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      motorcycles: [],
    };
  }
  async componentDidMount() {
    this.getMotorcycles();
  }
  getMotorcycles = async () => {
    const data = await axios(
      "https://api.airtable.com/v0/appBcQntEGzgoK1Ad/favorites?api_key=keyzDeexKzGh6V5pz"
    );

    this.setState({
      motorcycles: data.data.records,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.motorcycles.map((motorcycle) => (
                <Motorcycle id={motorcycle.id} {...motorcycle.fields} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
