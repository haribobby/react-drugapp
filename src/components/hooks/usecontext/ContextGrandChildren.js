import React, { useContext, useDebugValue } from 'react'
import ContextGrandGrandChildren from './ContextGrandGrandChildren';
// import { MessageContext } from './ContextParent'

function ContextGrandChildren() {

    // const data = useContext(MessageContext);
   // console.log(data);
    return (
        <div>
            <p>Grand children here.....</p>

            <ContextGrandGrandChildren/>

        </div>
    )
}

export default ContextGrandChildren


// A -> B -> C -> D -> E -> F

// name: "john"