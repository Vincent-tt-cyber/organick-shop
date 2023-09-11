import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, isDesabled }) => {
  const [countRating, setCountRating] = React.useState(rating);

  const handleRatingChange = (newRating) => {
    setCountRating(newRating);
  };
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: "pointer" }}
          onClick={() => isDesabled && handleRatingChange(star)}
        >
          {star <= countRating ? (
            <AiFillStar color="#FFA858" />
          ) : (
            <AiOutlineStar color="#FFA858" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
