import React, { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import Chatbot from "./Chatbot/Chatbot";

const Home = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await api.post(
          "/",
          {}
        );
        const { status, user } = data;
        if (status && user) {
          setUsername(user);
        } else {
          setUsername("DemoUser");
        }
      } catch (error) {
        console.warn("User verification skipped/failed, loading DemoUser mode:", error.message);
        setUsername("DemoUser");
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  if (loading) {
    return (
      <div 
        className="loading-container" 
        style={{ 
          height: "100vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          fontSize: "1.2rem",
          color: "#666",
          fontFamily: "sans-serif"
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <>
      <TopBar username={username} />
      <Dashboard username={username} />
      <Chatbot />
    </>
  );
};

export default Home;
