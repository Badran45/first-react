import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer py-5  text-center">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-4 p-5 ">
              <h3 className="text-uppercase">location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 p-5 ">
              <h3 className="text-uppercase">AROUND THE WEB</h3>
              <div className="icons d-flex justify-content-center gap-3 my-3 ">
                <div className="circle-icon">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="circle-icon">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="circle-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="circle-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-5 ">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>


        
        </div>
         
      </div>
       <div className="endFooter text-white text-center p-3">
              <p>Copyright © Your Website 2021</p>
          </div>
    </>
  );
};

export default Footer;
