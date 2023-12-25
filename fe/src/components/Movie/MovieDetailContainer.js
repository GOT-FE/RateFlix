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
      <div css={content}>
        <div css={posterAndGraph}>
          <div css={poster}>
            <img src={movie.image} alt="포스터" />
          </div>

          <div css={graph}>
            <h5>별점 그래프</h5>
            <h3>평균 ★ {movie.rating}</h3>
            <RatingChart ratings={[1, 2, 5, 4, 3]} />
          </div>
        </div>
        <div css={review}>
          <div css={rating}>
            <StarRating />
            {/* <div css={iconAndText}>
              <h1>3.7</h1>
              <h5>나의 별점</h5>
            </div> */}
            <div css={iconAndText}>
              <h1>3.7</h1>
              <h5>평균 별점</h5>
            </div>
            <div css={rightCon}>
              <div css={iconAndText}>
                <RiBookmarkLine size={35} />
                <h5>보고싶어요</h5>
              </div>
              <div css={iconAndText}>
                <TiPencil size={35} />
                <h5>코멘트</h5>
              </div>
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
    </div>
  );
};
export default MovieDetailContainer;
const containerStyles = css`
  background-color: ${Common.colors.darkwhite};
`;
const content = css`
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

  h5 {
    margin: 0 auto;
    color: ${Common.colors.blackHover};
  }
  h3 {
    margin: 0.5rem auto;
  }
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
  flex-basis: 15%;
  padding-top: 10px;
  border-bottom: 1px solid ${Common.colors.grayHover};
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
const rightCon = css`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const iconAndText = css`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 10rem; */
  gap: 0.5rem;
  h1,
  h5 {
    margin: 0 auto;
    color: ${Common.colors.blackHover};
  }
`;
const comment = css`
  /* border: 1px solid blue; */
  flex-basis: 18%;
  border-bottom: 1px solid ${Common.colors.grayHover};
  button {
    border-color: ${Common.colors.grayHover};
    font-size: large;
    font-weight: 600;
  }
`;
const story = css`
  /* border: 1px solid gray; */
  flex-basis: 25%;
  color: ${Common.colors.darkHover};
  font-size: medium;
  font-weight: 600;
  line-height: 1.5;
`;
