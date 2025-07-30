import React from 'react'
import Input from './../Input/Input';

const Contact = () => {
  return (
<>
     <div className="head_portfolio mt-4 mb-5 ">
          <h1 className="text-center text-uppercase fw-bold ">
            conatct section
          </h1>

          <div className=" p-2 text-center">
            <span className=" icon_head position-relative">
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          </div>

          <div className="container d-flex justify-content-center">

         
       

          <div class="w-50 ">
           <Input type={"text"} id={"name"} label={"userName"}/>
           <Input type={"number"} id={"age"} label={"userAge"}/>
           <Input type={"email"} id={"email"} label={"userEmail"}/>
           <Input type={"number"} id={"password"} label={"userPassword"}/>
               <button className='btn btn-info  mb-5 '> send Mesaage</button>

           
            
  
</div>
      
 </div>




</>
  )
}

export default Contact




 