import React, { useState } from "react";
import "./portfolio.css";
import img1 from "./../../assets/poert1.png";
import img2 from "./../../assets/port2.png";
import img3 from "./../../assets/port3.png";


const Portfolio = () => {
  let allImages = [img1, img2, img3, img1, img2, img3];
    const [modal, setmodal] = useState(false)
    const [current, setcurrent] = useState(null)


    function handleCloseImg(e){
console.log(e.target.tagName);
 if(e.target.tagName !="IMG"){
    setmodal(false)
 }

    }

  return (
 
      <div className="container mb-5 ">
        <div className="head_portfolio mt-4 ">
          <h1 className="text-center text-uppercase fw-bold ">
            portfolio 
          </h1>

          <div className=" p-2 text-center">
            <span className=" icon_head position-relative">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
        <div className="row g-5">
          {allImages.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="box_img  position-relative" onClick={()=>{setmodal(true),setcurrent(item)}}>
                <img src={item} className="w-100 rounded portimg" alt="photo" />
                <div className="layer"></div>
              </div>
            </div>
          ))}
        </div>







     {/* {modal? :} */}
    {modal ? (
  <div onClick={((e)=> handleCloseImg(e))} className="position-fixed d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50">
    <img src={current} width={"40%"} alt="" />
  </div>
) : ""}

      </div>
 
  );
};

export default Portfolio;
