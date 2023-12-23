/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
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
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div css={grayUnderLineStyles}>
      <header css={headerStyles}>
        <h1>RateFlix</h1>
        {!isAuth && (
          <nav>
            <ul>
              <li>
                <button css={loginoutButtonStyles}>로그인</button>
                <button css={registerButtonStyles}>회원가입</button>
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
