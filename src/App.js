import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Reviews from "./containers/Reviews";

const reviews = [
  {
    id: 1,
    title: "Great review",
    description: "This was a great review",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Awesome review",
    description: "This was an awesome review",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "Amazing review",
    description: "This was an amazing review",
    author: "John Doe",
  },
  {
    id: 4,
    title: "Superb review",
    description: "This was a superb review",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "Fantastic review",
    description: "This was a fantastic review",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Excellent review",
    description: "This was an excellent review",
    author: "Jane Doe",
  },

  {
    id: 4,
    title: "Superb review",
    description: "This was a superb review",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "Fantastic review",
    description: "This was a fantastic review",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Excellent review",
    description: "This was an excellent review",
    author: "Jane Doe",
  },

  {
    id: 4,
    title: "Superb review",
    description: "This was a superb review",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "Fantastic review",
    description: "This was a fantastic review",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Excellent review",
    description: "This was an excellent review",
    author: "Jane Doe",
  },

  {
    id: 4,
    title: "Superb review",
    description: "This was a superb review",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "Fantastic review",
    description: "This was a fantastic review",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Excellent review",
    description: "This was an excellent review",
    author: "Jane Doe",
  },

  {
    id: 4,
    title: "Superb review",
    description: "This was a superb review",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "Fantastic review",
    description: "This was a fantastic review",
    author: "John Doe",
  },
  {
    id: 6,
    title: "Excellent review",
    description: "This was an excellent review",
    author: "Jane Doe",
  },
];

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Reviews reviews={reviews} />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
