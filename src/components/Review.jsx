import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Review.css";

const Review = ({ review }) => {
  return (
    <div
      className={`text-white min-h-[120px] max-h-[120px] bg-[#5C2E7E]  p-4 rounded-lg shadow-lg cursor-pointer hover:opacity-80`}
    >
      <Link to={`/${review.id}`}>
        <h3 className="truncate">{review.title}</h3>
        <p className="truncate">{review.description}</p>
        <p className="text-xs italic mt-5"> {review.user}</p>
      </Link>
    </div>
  );
};

export default Review;
