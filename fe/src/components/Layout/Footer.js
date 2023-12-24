/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Footer = () => {
  const footerStyles = css`
    /* bottom: 0; */

    /* position: fixed; */
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;

    z-index: 1000;

    /* border-bottom: 1px solid #cccccc; */

    h1 {
      color: white;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `;
  return (
    <div css={footerStyles}>
      <h1>Footer</h1>
    </div>
  );
};
export default Footer;
