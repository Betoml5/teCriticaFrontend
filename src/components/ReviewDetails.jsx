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
      console.log(error);
    }
    // setReview(data);
  };

  useEffect(() => {
    getReviewById();
  }, []);

  return <div></div>;
};

export default ReviewDetails;
