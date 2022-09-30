import React, { useEffect } from "react";
import "../styles/components/Review.css";

const Review = ({ review, background }) => {
  return (
    <div className={`text-white bg-[#${background}]  p-4 rounded-lg shadow-lg`}>
      <h3>{review.title}</h3>
      <h5>- {review.author}</h5>
      <p>{review.description}</p>
    </div>
  );
};

export default Review;
