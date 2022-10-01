import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Reviews from "./containers/Reviews";

import { useEffect, useState } from "react";

import { findAllReviewsAPI } from "./services/review";
import CreateReview from "./components/CreateReview";

const App = () => {
  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    const { data } = await findAllReviewsAPI();
    setReviews(data);
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Reviews reviews={reviews} />} />
          <Route path="/create" element={<CreateReview />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
