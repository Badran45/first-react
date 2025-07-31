import React from 'react'
import "./Home.css"
import img from "./../../assets/avataaars.svg"

const Home = () => {
  return (
    <>
    <div className="home  ">
        <img  className=" mb-4 rounded-5" src={img} alt="avatar" />
        <h1 className="text-white text-uppercase fw-bold">start framework</h1>
         <div className='text-white p-2'>
        <span className=" icon_style position-relative">
            <i class="fa-solid fa-star"></i>
        </span>
        
       </div>
       <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
      
        
    </>
  )
}

export default Home