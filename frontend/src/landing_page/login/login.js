import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const getApiUrl = () => {
    if (typeof window !== "undefined" && window.location.hostname.includes("onrender.com")) {
      return "https://finvest-backend-pnj0.onrender.com";
    }
    if (process.env.REACT_APP_API_URL && !process.env.REACT_APP_API_URL.includes("localhost") && !process.env.REACT_APP_API_URL.includes("finvest-backend.onrender.com")) {
      return process.env.REACT_APP_API_URL;
    }
    return process.env.REACT_APP_API_URL || "http://localhost:4000";
  };

  const getDashboardUrl = () => {
    if (typeof window !== "undefined" && window.location.hostname.includes("onrender.com")) {
      return "https://finvest-dashboard.onrender.com";
    }
    if (process.env.REACT_APP_DASHBOARD_URL && !process.env.REACT_APP_DASHBOARD_URL.includes("localhost")) {
      return process.env.REACT_APP_DASHBOARD_URL;
    }
    return process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = getApiUrl();
    const dashboardUrl = getDashboardUrl();

    try {
      const { data } = await axios.post(
        `${apiUrl}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message, token } = data;
      if (success) {
        if (token) {
          localStorage.setItem("token", token);
        }
        handleSuccess(message || "Logged in successfully!");
        setTimeout(() => {
          try {
            const redirectUrl = new URL(dashboardUrl);
            if (token) {
              redirectUrl.searchParams.set("token", token);
            }
            window.location.href = redirectUrl.toString();
          } catch {
            window.location.href = token ? `${dashboardUrl}?token=${token}` : dashboardUrl;
          }
        }, 800);
      } else {
        handleError(message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login network/server error:", error);
      const errMsg = error.response?.data?.message || error.message || "Unable to reach server. Please check your connection.";
      handleError(errMsg);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container auth-container">
      <div className="row justify-content-center align-items-center w-100 mx-auto">
        <div className="col-12 col-md-6 text-center p-3">
          <img 
            src="media/signup.png" 
            alt="Login Illustration" 
            className="auth-image"
          />
        </div>
        <div className="col-12 col-md-5 offset-md-1">
          <div className="auth-card">
            <h2 className="auth-title">Login Account</h2>
            <p className="auth-subtitle">Access your Zerodha dashboard</p>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit" className="auth-btn">
                Log In
              </button>
              <div className="auth-footer">
                Don't have an account? <Link to="/signup">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;