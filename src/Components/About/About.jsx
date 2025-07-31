import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="home ">
        <h1 className="text-white text-uppercase fw-bold">about me</h1>
        <div className="text-white p-2">
          <span className=" icon_style position-relative">
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="container my-4 ">
          <div className="row  text-white   ">
            <div className="col-md-6">
              <p>
                Dr. Ahmed Badran is an intern medical doctor and a certified
                fitness coach. With a strong passion for sports science and
                clinical knowledge, he helps people improve their health,
                strength, and lifestyle through customized training programs
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Transformation isn't just physical — it's about mindset,
                discipline, and daily commitment. The goal is to guide each
                person toward a stronger, healthier lifestyle built on science,
                structure, and real results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
