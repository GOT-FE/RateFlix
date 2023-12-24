/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import img1 from "../images/새벽저주.jpeg";
import subImg from "../images/새벽저주장면.jpeg";
import MainHeader from "../components/Layout/MainHeader";
const DUMMY_MOVIE = {
  id: 1,
  image: img1,
  title: "새벽의 저주",
  year: 2004,
  country: "미국",
  rating: 3.7,
  subImg: subImg,
};
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(DUMMY_MOVIE);
  // useEffect에서 movieId를 가지고 해당 id를 가진 영화의 상세 정보를 가지고 와 movie에 넣는다.
  useEffect(() => {}, []);
  return (
    <Layout image={movie.subImg}>
      <h2>Movie ID: {movieId}</h2>
    </Layout>
  );
};

export default MovieDetail;
