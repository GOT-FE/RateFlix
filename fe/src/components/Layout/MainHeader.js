/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { Link } from "react-router-dom";
const MainHeader = (props) => {
  const headerStyles = css`
    width: 100%;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;

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
  const grayUnderLineStyles = css`
    border-bottom: 1px solid #cccccc;
  `;
  const underLineStyles = css`
    text-decoration: none;
  `;

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div css={grayUnderLineStyles}>
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
              <li>
                <button css={loginoutButtonStyles} onClick={logoutHandler}>
                  로그아웃
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default MainHeader;
