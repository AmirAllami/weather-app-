import React from "react";
import ReactCountryFlag from "react-country-flag";
import "./styles/CurrentWeather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
export default function CurrentWeather(props) {
  let dataCurrent = props.dataC;
  let unixtime = props.dataC.data.dt;
  let a = new Date(unixtime * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var minutes = "0" + a.getMinutes();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + minutes.substr(-2);
  let country = dataCurrent.data.sys.country;
  // var iconCode = dataCurrent.data.weather[0].icon;
  // let imgLink = "http://openweathermap.org/img/w/" + iconCode + ".png";

  let main2 = dataCurrent.data.weather[0].main;
  let icons = null;

  if (main2 === "Thunderstorm") {
    icons = faBolt;
  } else if (main2 === "Drizzle") {
    icons = faCloudRain;
  } else if (main2 === "Rain") {
    icons = faCloudShowersHeavy;
  } else if (main2 === "Snow") {
    icons = faSnowflake;
  } else if (main2 === "Clear") {
    icons = faSun;
  } else if (main2 === "Clouds") {
    icons = faCloud;
  } else {
    icons = faSmog;
  }

  return (
    <div className="currentTemp">
      <div className="main_info">
        <div className="info">
          <div className="city_info">
            <h1>{dataCurrent.data.name},</h1>
            <ReactCountryFlag
              countryCode={country}
              style={{
                width: "50px",
                height: "50px",
              }}
              svg
            />
          </div>
          <h3>{time} </h3>
        </div>

        <div className="iconwrapper">
          <FontAwesomeIcon icon={icons} style={{ fontSize: "80px" }} />
        </div>

        <div className="temp-icon">
          <h3>{dataCurrent.data.weather[0].description} </h3>
          <h1>
            {dataCurrent.data.main.temp}&#176;
            {props.unit === "metric" ? "C" : "F"}
          </h1>
        </div>
      </div>

      <div className="temps">
        <h4 className="additional_info">
          humidity {dataCurrent.data.main.humidity}%{" "}
        </h4>
        <h4 className="additional_info">
          wind :{dataCurrent.data.wind.speed}
          {props.unit === "metric" ? " m/s" : " mph"}
        </h4>
        <h4 className="additional_info">
          maximum temperature : {dataCurrent.data.main.temp_max}{" "}
        </h4>
        <h4 className="additional_info">
          minimum temperature : {dataCurrent.data.main.temp_min}
        </h4>
      </div>
    </div>
  );
}
