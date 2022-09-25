import React from "react";

export default function Place(props) {
  return (
    <article className="place">
      <h1>{props.name}</h1>
      <h5>{props.date}</h5>
      <p>{props.description}</p>
      <div className="locationContainer">
        <i className="bi bi-geo-alt"></i>
        <p>{props.location}</p>
      </div>
      <div className="imgContainer">
        <img src={props.img} alt={`place #${props.id}`} />
      </div>
      <div className="mapLink">
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          View on Google Maps
        </a>
      </div>
    </article>
  );
}
