import Card from "../UI/Card";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Review = ({ review }) => {
  const reviewStyles = css`
    /* margin: 1rem auto; */
    margin: 6px;
    border-radius: 6px;
    background-color: #cccccc;
    padding: 1rem;
    // 일정 사이즈 창을 줄이면 한줄에 코멘트 2개만 보여지도록 반응형 필요
    width: 24%;
    /* height: 80%; */
    /* max-width: 40rem; */
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    /* gap: 1rem; */
  `;
  return (
    <div css={reviewStyles}>
      <div>
        <h1>
          {review.userName} ★ {review.rating}
        </h1>
      </div>
      {review.content}
    </div>
  );
};
export default Review;
