/** @jsxImportSource @emotion/react */
import { Common } from "../../styles/common";
import ReactStars from "react-rating-stars-component";
const StarRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={50}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor={`${Common.colors.theme}`}
      color={`${Common.colors.grayHover}`}
    />
  );
};

export default StarRating;
