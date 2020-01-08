import React from "react";

const NumberButton = (props) => {
  return (
    <div className='num-btn'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.numbers}</button>
    </div>
  );
};

export default NumberButton;