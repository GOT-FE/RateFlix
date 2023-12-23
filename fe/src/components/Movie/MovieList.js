/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Card from "../UI/Card";
import img1 from "../../images/새벽저주.jpeg";
import img2 from "../../images/델마루이.jpeg";
import img3 from "../../images/컨텍트.png";
import img4 from "../../images/불량모모.jpeg";
import img5 from "../../images/펄프.jpeg";
import Movie from "./Movie";
const DUMMY_MOVIES = [
  {
    id: 1,
    image: img1,
    title: "새벽의 저주",
    year: 2004,
    country: "미국",
    rating: 3.7,
  },
  {
    id: 2,
    image: img2,
    title: "델마와 루이스",
    year: 1993,
    country: "미국",
    rating: 4,
  },
  {
    id: 3,
    image: img3,
    title: "컨텍트",
    year: 2016,
    country: "미국",
    rating: 4,
  },
  {
    id: 4,
    image: img4,
    title: "불량공주 모모코",
    year: 2005,
    country: "일본",
    rating: 3.5,
  },
  {
    id: 5,
    image: img5,
    title: "펄프픽션",
    year: 1994,
    country: "미국",
    rating: 4,
  },
];
const MovieList = () => {
  const movieConStyles = css`
    background-color: white;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
    justify-content: space-between;
  `;
  const [movies, setMovies] = useState(DUMMY_MOVIES);
  return (
    <div css={movieConStyles}>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
export default MovieList;
