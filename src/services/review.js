import axios from "axios";

export const createReview = async (review) => {
  try {
    const response = await axios.post("/api/reviews", { data: review });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const findAllReviewsAPI = async () => {
  try {
    const response = await axios.get("/api/reviews");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const findOneReviewAPI = async (id) => {
  try {
    const response = await axios.get(`/api/reviews/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateReviewAPI = async (id, review) => {
  try {
    const response = await axios.put(`/api/reviews/${id}`, { data: review });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteReviewAPI = async (id) => {
  try {
    const response = await axios.delete(`/api/reviews/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
