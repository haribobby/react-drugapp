import React, { useState } from "react";
import useFetch from "../customhooks/useFetch";

function CounterHook(props) {

    console.log("debugging....");

    const [count, setCount] = useState(1);

   // const data  = useFetch("https://jsonplaceholder.typicode.com/posts");
  
    return (

        <div>
            <p>
            Hooks Componenet @ Count Value : <span>{count}</span>
            </p>
            <button onClick={() => { setCount(count + 1); }}>Increment</button>
        </div>

    );

}

export default CounterHook;