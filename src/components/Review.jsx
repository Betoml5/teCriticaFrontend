import React from "react";
import "../styles/components/Review.css";

const Review = ({ review }) => {
  return (
    <div className="x">
      <div className="y">
        <h3>{review.title}</h3>
        <h4>{review.author}</h4>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default Review;
