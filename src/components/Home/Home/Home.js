import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import "./Home.css";
import About from "../About/About";
import Contact from "../../Contact/Contact";
const Home = () => {
  return (
    <div className="bg-home" id="home">
      <Banner></Banner>
      <Doctors></Doctors>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
