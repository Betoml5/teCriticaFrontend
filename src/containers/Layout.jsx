import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/containers/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
