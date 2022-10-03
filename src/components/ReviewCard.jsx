import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findOneReviewAPI } from "../services/review";

import LoaderIcon from "../assets/static/loader.png";

const ReviewCard = () => {
  const [review, setReview] = useState(null);

  const { id } = useParams();

  const getReviewById = async () => {
    try {
      const {
        data: { attributes },
      } = await findOneReviewAPI(id);
      setReview(attributes);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getReviewById();
  }, []);

  if (!review) {
    return (
      <div className="flex w-full items-center justify-center mt-20">
        <img src={LoaderIcon} alt="loader" className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative shadow-[inset_0_-4px_6px_rgba(0,0,0,0.6)] -rotate-3 cursor-pointer bg-[#ffc] max-w-md mx-4 md:mx-auto mt-20 rounded-sm shadow-2xl hover:rotate-0 animate transition-all ">
      <h4 className="text-xl p-4 text-red-500 font-regular uppercase border border-b-red-500 ">
        {review.title}
      </h4>
      <p className="p-4 border border-b-red-500">{review.description}</p>
      <p className="p-4 text-xs italic">{review.user}</p>
      <img
        className="absolute w-8 h-8 top-2 right-2 border-transparent drop-shadow-2xl "
        src="/thumb-tack.png"
        alt="pin"
      />
    </div>
  );
};

export default ReviewCard;
