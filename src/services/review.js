import axios from "axios";

const API = "http://localhost:1337/api/reviews";

export const createReviewAPI = async (review) => {
  try {
    const response = await axios.post(API, { data: review });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const findAllReviewsAPI = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const findOneReviewAPI = async (id) => {
  try {
    const response = await axios.get(`API/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateReviewAPI = async (id, review) => {
  try {
    const response = await axios.put(`API/${id}`, { data: review });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteReviewAPI = async (id) => {
  try {
    const response = await axios.delete(`API/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
