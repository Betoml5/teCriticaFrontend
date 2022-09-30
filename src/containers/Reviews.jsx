import React from "react";
import Review from "../components/Review";
import "../styles/containers/Reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-3 gap-2 max-w-5xl mx-auto my-2">
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default Reviews;
