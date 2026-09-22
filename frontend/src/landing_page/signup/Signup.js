import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const getApiUrl = () => {
    if (process.env.REACT_APP_API_URL && !process.env.REACT_APP_API_URL.includes("localhost")) {
      return process.env.REACT_APP_API_URL;
    }
    if (typeof window !== "undefined" && window.location.hostname.includes("onrender.com")) {
      return `https://${window.location.hostname.replace("frontend", "backend")}`;
    }
    return process.env.REACT_APP_API_URL || "http://localhost:4000";
  };

  const getDashboardUrl = () => {
    if (process.env.REACT_APP_DASHBOARD_URL && !process.env.REACT_APP_DASHBOARD_URL.includes("localhost")) {
      return process.env.REACT_APP_DASHBOARD_URL;
    }
    if (typeof window !== "undefined" && window.location.hostname.includes("onrender.com")) {
      return `https://${window.location.hostname.replace("frontend", "dashboard")}`;
    }
    return process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = getApiUrl();
    const dashboardUrl = getDashboardUrl();

    try {
      const { data } = await axios.post(
        `${apiUrl}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        if (token) {
          localStorage.setItem("token", token);
        }
        handleSuccess(message || "Signed up successfully!");
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
        handleError(message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup network/server error:", error);
      const errMsg = error.response?.data?.message || error.message || "Unable to reach server. Please check your connection.";
      handleError(errMsg);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container auth-container">
      <div className="row justify-content-center align-items-center w-100 mx-auto">
        <div className="col-12 col-md-6 text-center p-3">
          <img 
            src="media/SignUp copy.png" 
            alt="Signup Illustration" 
            className="auth-image"
          />
        </div>
        <div className="col-12 col-md-5 offset-md-1">
          <div className="auth-card">
            <h2 className="auth-title">Sign up now</h2>
            <p className="auth-subtitle">Or track your existing application</p>
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
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  placeholder="Choose a username"
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
                  placeholder="Choose a password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit" className="auth-btn">
                Sign Up
              </button>
              <div className="auth-footer">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;