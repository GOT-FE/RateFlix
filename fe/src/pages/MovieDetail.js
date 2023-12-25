/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import img1 from "../images/새벽저주.jpeg";
import subImg from "../images/새벽저주썸네일.jpeg";
import MovieDetailContainer from "../components/Movie/MovieDetailContainer";
import ReviewContainer from "../components/Review/ReviewContainer";
const DUMMY_MOVIE = {
  id: 1,
  image: img1,
  title: "새벽의 저주",
  year: 2004,
  country: "미국, 캐나다, 일본, 프랑스",
  rating: 3.7,
  grade: "청불", //백엔드에서 어떻게 들어오는지?
  subImg: subImg,
  runningTime: 100, //백엔드에서 어떻게 들어오는지?
  genre: "공포/액션",
  plot: "위스콘신주의 한 마을에 한 아침, 애나의 이웃이 그녀의 남자친구를 공격하고 애나는 간신히 목숨을 건져 달아난다. 좀비들이 거리를 배회하고 동네가 불타는 상황에서 애나는 쇼핑몰 안에 피신하며 작은 그룹에 속하게 된다. 좀비 무리로부터 그들 자신을 보호하고 또한, 인류 최후의 보루로서 함께 공존하기 위해 가능한 모든 자원을 사용하고 생존하기 위해 힘을 합친다.",
};
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(DUMMY_MOVIE);
  // useEffect에서 movieId를 가지고 해당 id를 가진 영화의 상세 정보를 가지고 와 movie에 넣는다.
  useEffect(() => {}, []);
  return (
    <Layout image={movie.subImg} movie={movie}>
      <MovieDetailContainer movie={movie} />
      <ReviewContainer />
    </Layout>
  );
};

export default MovieDetail;
