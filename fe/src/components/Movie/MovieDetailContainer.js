/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StarRating from "../Review/StarRating";
import Card from "../UI/Card";
import RatingChart from "../Review/RatingChart";
import { useState, useEffect } from "react";
import { TiPencil } from "react-icons/ti";
import { RiBookmarkLine } from "react-icons/ri";

const MovieDetailContainer = (props) => {
  const movie = props.movie;
  const containerStyles = css`
    /* border: 1px solid red; */
    background-color: white;
    width: 80%;
    display: flex;
    /* flex-wrap: wrap; */
    // 모바일 화면이 될 경우 wrap으로
    flex-direction: row;
    gap: 10px;
    padding: 20px;
    margin: 0 auto;
    justify-content: space-between;
  `;
  const posterAndGraph = css`
    /* border: 1px solid green; */
    flex: 1; /* "포스터 및 그래픽"의 초기 크기 설정 */
    flex-basis: 30%; /* "포스터 및 그래픽"의 가로 공간 비율(1/5) 설정 */
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;
  const poster = css`
    /* border: 1px solid pink; */
    width: 100%; /* 부모 요소에 꽉 차도록 설정 */
    height: auto; /* 비율 유지를 위해 높이를 자동으로 조정 */
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
    flex-basis: 80%; /* "코멘트"의 가로 공간 비율(4/5) 설정 */
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
  `;
  const rating = css`
    /* border: 1px solid red; */
    flex-basis: 25%;
    padding-top: 70px;
    border-bottom: 1px solid #cccccc;
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

    border-bottom: 1px solid #cccccc;
  `;
  const story = css`
    /* border: 1px solid gray; */
    flex-basis: 25%;
    /* border-bottom: 1px solid #cccccc; */
  `;
  const commentBtn = css`
    background-color: white;
    color: black;
    margin: 0 5px;

    :hover {
      background-color: white;
      color: #333333;
      border-color: #333333;
    }
  `;

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
            <button css={commentBtn}>코멘트 남기기</button>
          </Card>
        </div>
        <div css={story}>{movie.plot}</div>
      </div>
    </div>
  );
};
export default MovieDetailContainer;
