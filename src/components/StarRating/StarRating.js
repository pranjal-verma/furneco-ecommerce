import { useState } from "react";
import styles from "./index.module.scss";

const StarRating = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    console.log(rating, " = ", index);
    if (index == rating) {
      setRating(0);
      return;
    }
    setRating(index);
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starIndex = index + 1;
    return (
      <span
        key={starIndex}
        className={`${styles.star} ${
          starIndex <= (hoverRating || rating) ? styles.filled : ""
        }`}
        onMouseOver={() => handleMouseOver(starIndex)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(starIndex)}
      >
        ★
      </span>
    );
  });

  return <div className={styles["star-rating"]}>{stars}</div>;
};

export default StarRating;
