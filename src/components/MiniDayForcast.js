import React from "react";

export default function MiniDayForcast(props) {
  let unixtime = props.dayData.dt;
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
  var time = date + " " + month + " " + year;
  var iconCode = props.dayData.weather[0].icon;
  let imgLink = "http://openweathermap.org/img/w/" + iconCode + ".png";
  return (
    <div className="oneday-wrapper">
      <h3>{time}</h3>
      <h1 className="ftemp">
        {props.dayData.temp.day}&#176;
        {props.unit === "metric" ? "C" : "F"}
      </h1>
      <h3>
        {props.dayData.temp.eve}&#176;
        {props.unit === "metric" ? "C" : "F"}
      </h3>
      <img
        src={imgLink}
        alt="icon discribing the weather"
        className="imgIconD"
      />
    </div>
  );
}
