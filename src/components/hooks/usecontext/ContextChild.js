import React from 'react'
import ContextGrandChildren from './ContextGrandChildren'

function ContextChild() {
    return (
        <div>
            <p>Child here....</p>
            <ContextGrandChildren/>
        </div>
    )
}

export default ContextChild
