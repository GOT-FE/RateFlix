import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState(Array(5).fill(false));

  const handleStarClick = (starIndex) => {
    const updatedStars = selectedStars.map((star, index) => index <= starIndex);
    setSelectedStars(updatedStars);
  };

  return (
    <div>
      {selectedStars.map((star, index) => (
        <FaStar
          key={index}
          color={star ? "#03045e" : "#cccccc"}
          onClick={() => handleStarClick(index)}
          style={{ cursor: "pointer", width: "40px", height: "40px" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
