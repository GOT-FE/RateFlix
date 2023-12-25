/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Common } from "../../styles/common";

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (starIndex) => {
    const updatedStars = selectedStars.map((star, index) => index <= starIndex);
    setSelectedStars(updatedStars);
  };

  return (
    <div>
      {selectedStars.map((star, index) => (
        <FaStar
          key={index}
          color={star ? `${Common.colors.theme}` : `${Common.colors.grayHover}`}
          onClick={() => handleStarClick(index)}
          css={starsStyles}
        />
      ))}
    </div>
  );
};

export default StarRating;
const starsStyles = css`
  width: 40px;
  height: 40px;
`;
