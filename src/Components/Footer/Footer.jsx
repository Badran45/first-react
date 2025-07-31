import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer py-3  text-center">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-4 p-5 ">
              <h3 className="text-uppercase">location</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
            </div>
           <div className="col-md-4 p-5">
  <h3 className="text-uppercase text-center">Find Me Online</h3>
  <div className="icons d-flex justify-content-center gap-3 my-3">
    <a
      href="  "
      target="_blank"
      rel="noopener noreferrer"
      className="circle-icon d-flex align-items-center justify-content-center"
    >
      <i className="fa-brands fa-facebook"></i>
    </a>

    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="circle-icon d-flex align-items-center justify-content-center"
    >
     <i class="fa-brands fa-instagram"></i>
    </a>

   

    <a
  href="https://wa.me/201003256018"
  target="_blank"
  rel="noopener noreferrer"
  className="circle-icon d-flex align-items-center justify-content-center"
>
  <i className="fa-brands fa-whatsapp"></i>
</a>
  </div>
</div>
  <div className="col-md-4 p-5 ">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>

          
          </div>


        
        </div>
         
      </div>
      <div className="endFooter py-2 text-center text-white">
         <p>Copyright © Your Website 2021</p>
      </div>
      
    </>
  );
};

export default Footer;
