import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Review.css";

import HeartIcon from "../assets/static/love.png";

const Review = ({ review }) => {
  return (
    <div
      className={`text-white min-h-[120px] max-h-[120px] bg-[#990000]  p-4 rounded-lg shadow-lg cursor-pointer hover:opacity-80`}
    >
      <Link to={`/${review.id}`}>
        <h3 className="truncate font-semibold">{review.title}</h3>
        <p className="truncate">{review.description}</p>

        <div className="flex items-center justify-between mt-5">
          <p className="text-xs italic "> {review.user}</p>
          <div className="flex items-center ">
            <img src={HeartIcon} alt="heartIcon" className="w-5 h-5 mr-1" />
            {review.likes !== null ? (
              <p className="text-xs font-bold">{review?.likes}</p>
            ) : (
              <p className="text-xs font-bold">0</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Review;
