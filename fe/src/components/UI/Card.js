/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Common } from "../../styles/common";
const Card = (props) => {
  return <section css={cardStyles}>{props.children}</section>;
};

export default Card;
const cardStyles = css`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: ${Common.colors.white};
  padding: 1rem;
  width: 100%;
  border: 1px solid ${Common.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
