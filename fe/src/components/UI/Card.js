import { css } from "@emotion/react";
const Card = (props) => {
  const cardStyles = css`
    margin: 1rem auto;
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
  `;
  return (
    <section
      css={`
        ${cardStyles} ${props.className ? props.className : ""}
      `}
    >
      {props.children}
    </section>
  );
};

export default Card;
