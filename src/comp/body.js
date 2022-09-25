import React from "react";
import { data } from "./data";
import Place from "./place";

export default function Body() {
  const cities = data.map((city) => {
    return <Place key={city.id} {...city} />;
  });
  return <div className="placesContainer">{cities}</div>;
}
