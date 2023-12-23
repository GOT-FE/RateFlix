/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Card from "../UI/Card";
const Movie = (props) => {
  const imgStyles = {
    display: "block",
    margin: "0 auto",
    width: "100%",
    height: "auto",
  };
  const [movie, setMovie] = useState(props.movie);
  return (
    <Card>
      <img src={movie.image} alt="영화 포스터" css={imgStyles} />
      <h1>{movie.title}</h1>
      <h3>
        {movie.year} • {movie.country}
      </h3>
      <h3>평균 ★ {movie.rating}</h3>
    </Card>
  );
};
export default Movie;
