/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Common } from "../../styles/common";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsChatSquareQuote } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "../../axios";
const Review = ({ review }) => {
  const [userInfo, setUserInfo] = useState(null);
  // redux를 이용해 사용자 정보를 가져오는 방법 생각해보기
  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await axios.get(`/users/${review.userId}`);
        const user = res.data;
        setUserInfo(user);
        console.log(userInfo);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    }
    getUserInfo();
  }, [review]);
  return (
    <>
      {userInfo && (
        <div css={reviewStyles}>
          <div css={infoStyles}>
            {userInfo.username} <div>★ {review.rating}</div>
          </div>
          <div css={commentStyles}>{review.comment}</div>
          <div css={icons}>
            <BsHandThumbsUp />
            <div>3</div>
          </div>
          <div css={thumbsUp}>좋아요</div>
        </div>
      )}
    </>
  );
};
export default Review;
const reviewStyles = css`
  margin: 6px;
  border-radius: 6px;
  padding: 1rem;
  // 일정 사이즈 창을 줄이면 한줄에 코멘트 2개만 보여지도록 반응형 필요
  width: 24%;
  height: 280px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  background-color: ${Common.colors.darkwhite};
  color: black;
`;
const infoStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-basis: 20%;
  border-bottom: 1px solid ${Common.colors.grayHover};
`;
const commentStyles = css`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  text-align: left;
  border-bottom: 1px solid ${Common.colors.grayHover};
`;
const icons = css`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  flex-basis: 15%;
  border-bottom: 1px solid ${Common.colors.grayHover};
`;
const thumbsUp = css`
  display: flex;
  flex-direction: row;
  flex-basis: 10%;
  color: ${Common.colors.theme};
  font-size: medium;
  font-weight: 600;
`;
