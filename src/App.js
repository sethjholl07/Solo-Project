import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import ImageUploader from "../components/ImageUpload.jsx";
import OutfitCreator from "../components/OutfitCreator.jsx"

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:3030';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden: false,
        className: "container",
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        const newCount = prevState.count + 1;
        if(newCount <= 5) {
          return { count: newCount };
        } else {
          return { count: newCount, hidden: true };
        }
      });
    };

    render() {
      return (
        <div className={this.state.count === 6 ? "outfitCreator" : "container"}>
          <div className="header">
            <h1>Outfit Vizualizer</h1>
          </div>
          
          <div className="heading top">
            <h2 hidden={this.state.hidden}>TOP</h2>
            <ImageUploader incrementCounter={this.incrementCounter}/>
          </div>
          
          <div className="row hat">
            <div className="item">
              <h2 hidden={this.state.hidden}>HAT</h2>
              <ImageUploader incrementCounter={this.incrementCounter}/>
            </div>
          </div>

          <div className="row pants">
            <div className="item">
              <h2 hidden={this.state.hidden}>PANTS</h2>
              <ImageUploader incrementCounter={this.incrementCounter}/>
            </div>
          </div>

          <div className="row sunglasses">
            <div className="item">
              <h2 hidden={this.state.hidden}>SUNGLASSES</h2>
              <ImageUploader incrementCounter={this.incrementCounter}/>
            </div>
          </div>

          <div className="heading shoes">
            <h2 hidden={this.state.hidden}>SHOES</h2>
            <ImageUploader incrementCounter={this.incrementCounter}/>
          </div>

          {this.state.count === 5 && <OutfitCreator incrementCounter={this.incrementCounter}/>}
        </div>
      );
    }
}

export default App;
