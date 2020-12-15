import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="form">
        <h1 className="logo">React Weather App</h1>

        <form className="inputwrapper" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            placeholder="Search By city"
            className="search"
            onChange={this.props.handlechange}
            id="inputfield"
          />
          <button type="submit" className="searchicon">
            <FaSearch />
          </button>
        </form>
        <div className="unit_buttons">
          <button
            className="unit"
            style={{
              backgroundColor:
                this.props.unit === "metric" ? "#008CBA" : "#e7e7e7",
              color: this.props.unit === "metric" ? "white" : "black",
            }}
            onClick={this.props.changeUnitToC}
          >
            °C
          </button>
          <button
            className="unit"
            style={{
              backgroundColor:
                this.props.unit === "imperial" ? "#008CBA" : "#e7e7e7",
              color: this.props.unit === "imperial" ? "white" : "black",
            }}
            onClick={this.props.changeUnitToF}
          >
            °F
          </button>
        </div>
      </div>
    );
  }
}
