import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import ImageUploader from "../components/ImageUpload.jsx";

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:3030';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
        <h1>Outfit Vizualizer</h1>
        </div>
        
        <div className="heading top">
        <h2>TOP</h2>
        <ImageUploader />
        </div>
        
        <div className="row hat">
          <div className="item">
            <h2>HAT</h2>
            <ImageUploader />
          </div>
        </div>

        <div className="row pants">
          <div className="item">
            <h2>PANTS</h2>
            <ImageUploader />
          </div>
        </div>

        <div className="row sunglasses">
          <div className="item">
            <h2>SUNGLASSES</h2>
            <ImageUploader />
          </div>
        </div>

        <div className="heading shoes">
        <h2>SHOES</h2>
        <ImageUploader />
        </div>
      </div>
    );
  }
}

export default App;
