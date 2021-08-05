import React from 'react'
import ContextChild from './ContextChild';

export const MessageContext = React.createContext();
function ContextParent() {
    return (
        <div>
            <p> Parent Componenet </p>
            <MessageContext.Provider value={{name: "Rosey", age:26}}>
                <ContextChild/>
            </MessageContext.Provider>
        </div>
    )
}

export default ContextParent
