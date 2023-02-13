import React from "react";
import About from "../../Components/About/About";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <About />
    </div>
  );
};

export default HomePage;
