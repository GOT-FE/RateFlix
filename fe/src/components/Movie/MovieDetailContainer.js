/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StarRating from "../Review/StarRating";
import Card from "../UI/Card";
import RatingChart from "../Review/RatingChart";
import { useEffect } from "react";
import { TiPencil } from "react-icons/ti";
import { RiBookmarkLine } from "react-icons/ri";
import { Common } from "../../styles/common";

const MovieDetailContainer = (props) => {
  const movie = props.movie;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div css={containerStyles}>
      <div css={posterAndGraph}>
        <div css={poster}>
          <img src={movie.image} alt="포스터" />
        </div>

        <div css={graph}>
          <div>별점 그래프</div>
          <div>평균 ★ {movie.rating}</div>
          <RatingChart ratings={[1, 2, 5, 4, 3]} />
        </div>
      </div>
      <div css={review}>
        <div css={rating}>
          <StarRating />
          <div css={rightCon}>
            <h1>평균 ★ 3.7</h1>
            <RiBookmarkLine size={35} />
            <TiPencil size={35} />
          </div>
        </div>
        <div css={comment}>
          <Card>
            user1 님의 감상을 글로 남겨보세요
            <button>코멘트 남기기</button>
          </Card>
        </div>
        <div css={story}>{movie.plot}</div>
      </div>
    </div>
  );
};
export default MovieDetailContainer;
const containerStyles = css`
  /* border: 1px solid red; */
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  margin: 0 auto;
  justify-content: space-between;
`;
const posterAndGraph = css`
  /* border: 1px solid green; */
  flex: 1;
  flex-basis: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const poster = css`
  /* border: 1px solid pink; */
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 이미지의 비율을 유지하면서 컨테이너에 꽉 차도록 설정 */
  }
`;
const graph = css`
  /* border: 1px solid violet; */
  padding: 10px;
  width: 80%;
`;
const review = css`
  /* border: 1px solid orange; */
  flex: 4; /* "코멘트"의 초기 크기 설정 */
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 1rem;
`;
const rating = css`
  /* border: 1px solid red; */
  flex-basis: 25%;
  padding-top: 70px;
  border-bottom: 1px solid ${Common.colors.grayHover};
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
const rightCon = css`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h1 {
    margin-right: 10rem;
  }
`;
const comment = css`
  /* border: 1px solid blue; */
  flex-basis: 25%;
  border-bottom: 1px solid ${Common.colors.grayHover};
`;
const story = css`
  /* border: 1px solid gray; */
  flex-basis: 25%;
`;
