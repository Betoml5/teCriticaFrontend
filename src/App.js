import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Reviews from "./containers/Reviews";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
