import React from 'react';

const Input = ({type,id,label}) => {
  return (
    <div className="d-flex flex-column align-items-start my-4 ">
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} className=" w-100" />
    </div>
  );
};

export default Input;
