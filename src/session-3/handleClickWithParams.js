import { useEffect, useState } from "react";
export default function HandleClickWithParams(){
    const [val,setVal] = useState("Hello");
    const [cnt,setCnt] = useState(0);

    useEffect(()=>{
        console.log(val);
    },[val])
    const handleClick = (val,count, event)=>{
        console.log("HELLO WORLD")
        setCnt(cnt+count);
        console.log(cnt);
        if(cnt%2){
            setVal(val);
        }else{
            setVal("hello");
        }
    }
    // const handleClickTest =()=>{
    //     console.log("Test")
    //     setCnt(cnt+1);
    //     console.log(cnt);
    // }
    return(
        <button onClick={(event)=>{handleClick("123",2,event)}}>
            Click me
        </button>
    )
}
