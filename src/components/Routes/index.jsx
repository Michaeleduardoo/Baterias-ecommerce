import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Main/page";
import Produtos from "../Pages/Produtos/page";
import Sold from "../Pages/Sold/page";
import Contact from "../Pages/Contact/page";
import Header from "../Pages/Header/page";
import Footer from "../Pages/Footer/page";
import "./style.css";
import Termos from "../Pages/Termos/page";
import User from "../Pages/User/page";

const Spinner = () => (
  <div className="loading">
    <div className="spinner-wrapper">
      <span className="spinner-text">Loading</span>
      <span className="spinner"></span>
    </div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/maisvendidos" element={<Sold />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/users" element={<User />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
