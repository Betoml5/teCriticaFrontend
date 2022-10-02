import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findOneReviewAPI } from "../services/review";

const ReviewDetails = () => {
  const [review, setReview] = useState({});

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

  return (
    <div className="divide-y-2 divide-dotted  divide-red-500 -rotate-3 cursor-pointer bg-[#ffc] max-w-md mx-4 md:mx-auto mt-20 rounded-sm shadow-xl hover:rotate-0 animate transition-all">
      <h4 className="text-xl p-4 text-red-500 font-regular uppercase">
        {review.title}
      </h4>
      <p className="p-4">{review.description}</p>
      <p className="p-4 text-xs italic">{review.user}</p>
    </div>
  );
};

export default ReviewDetails;
