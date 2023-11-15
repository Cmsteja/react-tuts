import { useEffect, useState } from "react"
import { Form } from "react-router-dom";

export default function FormComponent(props){
    const [inputValue, setInputValue] = useState();
    const handleClick = (event)=>{
        alert(`entered  ${inputValue}`);
        event.preventDefault();
    }
    const handleChange = (event)=>{
        setInputValue(event.target.value);
    }
    return(
            <form onSubmit={handleClick}>
                <label>Enter Something</label>
                <input type="text" value={inputValue} onChange={handleChange} />
                  <button type="submit">
                    Button
            </button>
            </form>
    )
}