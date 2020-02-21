import React from "react";

const Movie = props => {
  return (
    <div className="movie">
      <img src={props.src} alt="" />
      <br />
      <p>{props.title}</p>
    </div>
  );
};

export default Movie;
