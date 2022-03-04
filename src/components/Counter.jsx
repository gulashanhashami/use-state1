import { useState } from "react";
import "./Counter.css"
export const Counter=()=>{
   const [counter, setCounter]= useState(0);
     
   const handleClick=(value)=>{
       setCounter(counter+value)
   };
   const handleClickforMulti=()=>{
       setCounter(counter*2)
   };

   if(counter>20){
       return <h2>Counter has reached its maximum value. Please refresh it and continue.</h2>
   }
   if(counter<0){
       return <h2>Counter has reached its minimum value. Please refresh it and continue.</h2>
   }
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
     <button id="btn1" onClick={()=>handleClick(1)}>Increase</button>
     <button id="btn2" onClick={()=>handleClick(-1)}>Decrease</button>
     <button id="btn3" onClick={()=>handleClickforMulti()}>Double</button>
     </div>
    );
}