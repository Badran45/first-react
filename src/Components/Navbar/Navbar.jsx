import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


let scrollListenerAdded = false; // عشان نضيف الـ scroll مرة واحدة بس
const Navbar = () => {
       const [isScroll, setisScroll] = useState(false)


//           function scrollHandling(){
//             if(window.scrollY>10){
//                 setisScroll(true)
//             }else{
//                 setisScroll(false)
//             }
//           }
    
//          if (!scrollListenerAdded) {
//     window.addEventListener("scroll", scrollHandling);
//     scrollListenerAdded = true;
//   }
/*
${isScroll ? "py-4" : "py-10"}   // this problem
*/   


  return (
    <nav className={`navbar  navbar-expand-lg navColor fixed-top  transit  `} >
  <div className="container ">
    <Link className="navbar-brand text-white text-uppercase  fw-bold fs-2" to="home">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav py-4 ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item ">
          <NavLink className="nav-link fw-bold text-uppercase rounded text-white"to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-uppercase rounded text-white"to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bold text-uppercase rounded text-white"to="contact">Conatct</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar