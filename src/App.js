import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Reviews from "./containers/Reviews";
import CreateReview from "./components/CreateReview";
import ReviewCard from "./components/ReviewCard";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/create" element={<CreateReview />} />
          <Route path=":id" element={<ReviewCard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
