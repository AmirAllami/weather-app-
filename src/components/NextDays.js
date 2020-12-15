import React from "react";
import MiniDayForcast from "./MiniDayForcast";
import "./styles/NextDays.css";

export default function NextDays(props) {
  let data1 = props.dataNextDays.data.list;
  console.log(data1);

  return (
    <div className="daily-wrapper">
      <h1>Daily Forcast</h1>
      <div className="days-container">
        {data1.map((day, index) => (
          <MiniDayForcast dayData={day} key={index} unit={props.unit} />
        ))}
      </div>
    </div>
  );
}
