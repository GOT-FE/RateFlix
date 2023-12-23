/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const UserProfile = () => {
  const profileStyles = css`
    margin: 5rem auto;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    width: 40rem;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: #decccc;
  `;
  return (
    <main css={profileStyles}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;
