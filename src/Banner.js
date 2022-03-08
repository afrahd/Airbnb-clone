import React from "react";
import "./Banner.css";
import bannerimage from "./assets/Group77.png";

function Banner() {
  return (
    <section className="banner"> 
      <img src={bannerimage} alt="grid" className="banner_image"/>
      <h1 className="banner_header">Online Experiences</h1>
      <p className="banner_text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Banner;
