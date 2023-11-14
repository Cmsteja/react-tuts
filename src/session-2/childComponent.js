import { useEffect, useState } from "react"

export default function ChildComponent(props){
    // const {test} = props;
    // console.log();
    const {text,jsxProp,number} = props;
    let [st, setSt] =useState(0);
    const variable = "Logic";
    const handleClick =()=>{
        console.log("Hello world")
    }
    useEffect(()=>{
      
        setSt(1);
       
    },[]);
    
    return (
        <>
        Hello world {st} .
        {text} {number}
        {props.jsxProp}
       

        </>
    )
}