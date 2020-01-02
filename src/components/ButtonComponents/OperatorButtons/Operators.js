import React, {useState} from "react";
import {operators} from '../../../data.js';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operator]= useState(operators);
  console.log(operator);

  

  return (
    <div>

     {/* Having a issue accessing object. I need to review.
    
      Also don't know why error says Line 26:  Expected an assignment or function call and instead saw an expression 

      */}

      {operator.map(function(operatorArr, index){
       return <OperatorButton key={index} operators= {operatorArr}/>
      })}


      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      }
    </div>
  );
};

export default Operators;
