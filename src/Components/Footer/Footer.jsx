import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer py-3  text-center">
        <div className="container">
          <div className="row text-white">
            <div className="col-md-6 p-5 ">
              <h3 className="text-uppercase">location</h3>
<p>Mohamed Naguib Street</p>
<p>Alexandria, Egypt</p>
            </div>
           <div className="col-md-6 p-5">
  <h3 className="text-uppercase text-center">Find Me Online</h3>
  <div className="icons d-flex justify-content-center gap-3 my-3">
    <a
      href="https://www.facebook.com/share/16mnu9RxBK/"
      target="_blank"
      rel="noopener noreferrer"
      className="circle-icon d-flex align-items-center justify-content-center"
    >
      <i className="fa-brands fa-facebook"></i>
    </a>

    <a
      href="http://www.instagram.com/ahmed_badra2n?igsh=MXRyODdrMmd2OWY1Yg=="
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

          
          </div>


        
        </div>
         
      </div>
      
    </>
  );
};

export default Footer;
