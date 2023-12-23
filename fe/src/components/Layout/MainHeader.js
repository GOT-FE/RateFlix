/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const MainHeader = (props) => {
  const headerStyles = css`
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;

    h1 {
      color: #1098f7;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `;
  return (
    <header css={headerStyles}>
      <h1>RateFlix</h1>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
