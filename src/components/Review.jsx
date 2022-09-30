import React, { useEffect } from "react";
import "../styles/components/Review.css";

const Review = ({ review }) => {
  return (
    <div className="text-white bg-green-500 p-4 rounded-lg">
      <h3>{review.title}</h3>
      <h5>- {review.author}</h5>
      <p>{review.description}</p>
    </div>
  );
};

export default Review;
