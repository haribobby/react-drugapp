import React, { useContext, useDebugValue } from 'react'
import { MessageContext } from './ContextParent'

function ContextGrandGrandChildren() {

    const data = useContext(MessageContext);
    console.log(data);
    return (
        <div>
            <p>Grand Grand children here.....</p>
         

            <div> Name: <b> {data.name}</b> &nbsp;&nbsp; age: {data.age}</div>

        </div>
    )
}

export default ContextGrandGrandChildren


// A -> B -> C -> D -> E -> F

// name: "john"