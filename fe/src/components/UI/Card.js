/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Card = (props) => {
  const cardStyles = css`
    margin: 1rem auto;
    border-radius: 6px;
    background-color: #0077b6;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
  `;
  return <section css={cardStyles}>{props.children}</section>;
};

export default Card;
