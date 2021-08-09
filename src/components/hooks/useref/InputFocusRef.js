import React, { useRef, useEffect } from 'react'

function InputFocusRef() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="number" />
        </div>
    )
}

export default InputFocusRef