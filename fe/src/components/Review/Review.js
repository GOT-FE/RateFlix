/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Common } from "../../styles/common";
const Review = ({ review }) => {
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
const reviewStyles = css`
  margin: 6px;
  border-radius: 6px;
  padding: 1rem;
  // 일정 사이즈 창을 줄이면 한줄에 코멘트 2개만 보여지도록 반응형 필요
  width: 24%;
  border: 1px solid ${Common.colors.grayHover};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;
