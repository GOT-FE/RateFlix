/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
const Movie = (props) => {
  const cardStyles = css`
    width: 245px;
    /* padding: 1rem; */
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    /* text-align: center; */
  `;
  const imgStyles = {
    display: "block",
    margin: "0 auto",
    width: "100%",
    height: "75%",
  };
  const titleStyles = css`
    padding: 0.5rem 0rem 0rem 0.5rem;
    font-size: large;
    font-weight: 600;
  `;
  const yearAndCountryStyles = css`
    padding: 0rem 0rem 0rem 0.5rem;
    font-size: medium;
    font-weight: 400;
  `;
  const ratingStyles = css`
    padding: 0rem 0rem 0rem 0.5rem;
    font-size: medium;
    font-weight: 400;
    color: #333333;
  `;
  const [movie, setMovie] = useState(props.movie);
  return (
    <div css={cardStyles}>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.image} alt="영화 포스터" css={imgStyles} />
        <div css={titleStyles}>{movie.title}</div>
        <div css={yearAndCountryStyles}>
          {movie.year} • {movie.country}
        </div>
        <div css={ratingStyles}>평균 ★ {movie.rating}</div>
      </Link>
    </div>
  );
};
export default Movie;
