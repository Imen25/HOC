import React from "react";
import Movie from "./Movie";

const MovieList = () => {
  let movies = [
    {
      title: "You",
      src:
        "https://i.pinimg.com/736x/c2/7f/a4/c27fa447b91d34933293f37a0b2f1a89.jpg",
      rank: "5"
    },
    {
      title: "Sonic The Hedgehog",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1573569638/amc-cdn/production/2/movies/56300/56344/PosterDynamic/96202.jpg",
      rank: "4"
    },
    {
      title: "Harley Quinn: Birds of Prey",
      src:
        "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1576256007/amc-cdn/production/2/movies/54400/54416/PosterDynamic/97309.jpg",
      rank: "3"
    }
  ];
  return (
    <div className="movies">
      {movies.map((movie, i) => (
        <Movie key={i} src={movie.src} title={movie.title} rank={movie.rank} />
      ))}
    </div>
  );
};
export default MovieList;
