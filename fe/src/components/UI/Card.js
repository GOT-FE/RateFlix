/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Card = (props) => {
  const cardStyles = css`
    margin: 1rem auto;
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    width: 100%;
    /* height: 80%; */
    /* max-width: 40rem; */
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  `;
  return <section css={cardStyles}>{props.children}</section>;
};

export default Card;
