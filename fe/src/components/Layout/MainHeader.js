/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const MainHeader = (props) => {
  const headerStyles = css`
    top: 0;

    position: fixed;
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    z-index: 1000;

    border-bottom: 1px solid #cccccc;

    h1 {
      color: #03045e;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `;
  const loginoutButtonStyles = css`
    background-color: white;
    color: grey;
    margin: 0 5px;
    border: none;

    :hover {
      background-color: white;
      color: #cccccc;
    }
  `;
  const registerButtonStyles = css`
    background-color: white;
    color: black;
    margin: 0 5px;

    :hover {
      background-color: white;
      color: #333333;
      border-color: #333333;
    }
  `;

  const underLineStyles = css`
    text-decoration: none;
  `;
  const iconContainer = css`
    display: flex;
    align-items: center;
  `;

  const iconStyles = css`
    font-size: 1.5em;
    margin-left: 5px;
  `;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header css={headerStyles}>
      <Link to="/" css={underLineStyles}>
        <h1>RateFlix</h1>
      </Link>
      {!isAuth && (
        <nav>
          <ul>
            <li>
              <Link to="/login">
                <button css={loginoutButtonStyles}>로그인</button>
              </Link>
              <Link to="/register">
                <button css={registerButtonStyles}>회원가입</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isAuth && (
        <nav>
          <ul>
            <li css={iconContainer}>
              <button css={loginoutButtonStyles} onClick={logoutHandler}>
                로그아웃
              </button>
              <FaUserCircle css={iconStyles} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
