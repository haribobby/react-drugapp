import React, { useContext, useDebugValue } from 'react'
import { MessageContext } from './ContextParent'

function ContextGrandChildren() {

    const data = useContext(MessageContext);
    console.log(data);
    return (
        <div>
            <p>Grand children here.....</p>
            {/* <MessageContext.Consumer>
    {(data) =><div> Name: <b> {data.name}</b> &nbsp;&nbsp; age: {data.age}</div>}
            </MessageContext.Consumer> */}

            <div> Name: <b> {data.name}</b> &nbsp;&nbsp; age: {data.age}</div>

        </div>
    )
}

export default ContextGrandChildren
