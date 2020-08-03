import React, { Component } from "react"
import axios from "axios"
import Motorcycle from "./Motorcycle"


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
                <Motorcycle {...motorcycle.fields} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


