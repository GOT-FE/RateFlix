/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const Footer = () => {
  return (
    <div css={footerStyles}>
      <h1>Footer</h1>
    </div>
  );
};
export default Footer;
const footerStyles = css`
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;

  z-index: 1000;

  h1 {
    color: white;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
