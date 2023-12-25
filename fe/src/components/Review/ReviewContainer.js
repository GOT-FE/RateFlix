/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Review from "./Review";
import { useState } from "react";
import { Common } from "../../styles/common";
const DUMMY_REVIEWS = [
  {
    id: 1,
    userName: "user1",
    rating: 4,
    content: "진짜 너무 재밌어요 올해 최고의 영화!",
  },
  {
    id: 2,
    userName: "user2",
    rating: 3,
    content: "볼만 했습니다 그냥저냥 보통!!",
  },
  {
    id: 3,
    userName: "user3",
    rating: 4,
    content: "좀비영화 중에 최고! 좀비영화의 바이블입니다ㅋㅋㅋㅋㅋㅋ",
  },
  {
    id: 4,
    userName: "user4",
    rating: 1,
    content: "제 취향은 아니네요 ㅠㅠㅠㅠㅠ",
  },
  {
    id: 5,
    userName: "user5",
    rating: 5,
    content: "인생영화임 bbb",
  },
];
const ReviewContainer = (props) => {
  const [reviews, setReviews] = useState(props.reviews);

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>
        <h1>코멘트</h1>
        <h2> {reviews.length}+</h2>
      </div>
      <div css={listStyles}>
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};
export default ReviewContainer;
const containerStyles = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin: 20px auto;
  justify-content: space-between;
  text-align: center;
  h1 {
    margin-left: 25px;
  }
`;
const titleStyles = css`
  display: flex;
  flex-direction: row;
  text-align: center;

  h2 {
    margin: auto 0.5rem;
    color: ${Common.colors.theme};
  }
`;
const listStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 15px;
`;
