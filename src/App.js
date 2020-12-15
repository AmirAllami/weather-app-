import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import NextDays from "./components/NextDays";
import { CSSTransitionGroup } from "react-transition-group";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "metric",
      city: "",
      city2: "",
      dataC: {},
      dataNextDays: {},
    };
    this.changeUnitToC = this.changeUnitToC.bind(this);
    this.changeUnitToF = this.changeUnitToF.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeUnitToC() {
    if (this.state.city === "") {
      if (this.state.unit === "imperial") {
        this.setState({ unit: "metric" });
      }
    } else {
      if (this.state.unit === "imperial") {
        this.setState(
          {
            unit: "metric",
          },
          () => this.callApi()
        );
      }
    }
  }
  changeUnitToF() {
    if (this.state.city === "") {
      if (this.state.unit === "metric") {
        this.setState({ unit: "imperial" });
      }
    } else {
      if (this.state.unit === "metric") {
        this.setState({ unit: "imperial" }, () => this.callApi());
      }
    }
  }
  handlechange(e) {
    this.setState({ city2: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ city: this.state.city2 }, () => this.callApi());
  }
  async callApi() {
    const url1 = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&appid=97a812996e1d3836d9ad739bbb5072d0&units=${this.state.unit}`;
    const url2 = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=97a812996e1d3836d9ad739bbb5072d0&units=${this.state.unit}`;
    console.log(url1);
    let response = await axios.get(url1);
    this.setState({ dataNextDays: response });
    let respone2 = await axios.get(url2);
    this.setState({ dataC: respone2 });
    document.getElementById("inputfield").value = "";
  }
  render() {
    return (
      <div>
        <Header
          handlechange={this.handlechange}
          handleSubmit={this.handleSubmit}
          changeUnitToF={this.changeUnitToF}
          changeUnitToC={this.changeUnitToC}
          unit={this.state.unit}
        />
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={300}
        >
          {Object.entries(this.state.dataC).length > 0 && (
            <CurrentWeather dataC={this.state.dataC} unit={this.state.unit} />
          )}
          {Object.entries(this.state.dataNextDays).length > 0 && (
            <NextDays
              dataNextDays={this.state.dataNextDays}
              unit={this.state.unit}
            />
          )}
        </CSSTransitionGroup>
      </div>
    );
  }
}
