import { useState } from "react";
export default function HandleButton (){
    const [val,setVal] = useState(0);
    const handleClick = ()=>{
        setVal(val+1);
    }
    return(
        
      <>
        <button onClick={handleClick}>
            Click me {val}
        </button>
      </>
    )
}