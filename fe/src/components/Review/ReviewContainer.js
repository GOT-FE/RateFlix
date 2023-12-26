/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Review from "./Review";
import { useState, useEffect } from "react";
import { Common } from "../../styles/common";
const ReviewContainer = (props) => {
  const reviews = props.reviews;
  useEffect(() => {
    console.log(reviews);
  }, [reviews]);
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
