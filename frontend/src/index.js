import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'

import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/login";
import HomePage from './landing_page/home/HomePage';
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import ScrollToTop from './ScrollToTop';

import TermsPage from "./landing_page/legal/TermsPage";
import PolicyPage from "./landing_page/legal/PolicyPage";
import RiskDisclosurePage from "./landing_page/legal/RiskDisclosurePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/risk-disclosure" element={<RiskDisclosurePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

