import React, { useState } from "react";

function CounterHook(props) {

    const [count, setCount] = useState(1);
  
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