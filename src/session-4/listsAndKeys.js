import Component from "./component";
import { useState } from "react";


const MyComponent = ({ value }) => {
    // Some component logic with local state
    const [count, setCount] = useState(0);
  
    return (
      <div onClick={() => setCount(count + 1)}>
        {value} - {count}
      </div>
    );
  };
  
  export default function List(){
    const items = [1, 2, 3,  4,5];
  
    return items.map(item => <MyComponent key={item} value={item} />);
  };