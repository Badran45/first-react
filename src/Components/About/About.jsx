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
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
