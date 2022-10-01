import React, { useEffect } from "react";
import "../styles/components/Review.css";

const Review = ({ review: { attributes: review } }) => {
  console.log(review);
  return (
    <div className={`text-white bg-[#5C2E7E]  p-4 rounded-lg shadow-lg`}>
      <h3>{review.title}</h3>
      <h5>- {review.user}</h5>
      <p>{review.description}</p>
    </div>
  );
};

export default Review;
