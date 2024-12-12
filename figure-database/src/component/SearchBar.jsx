import { useState } from 'react'

function InputBar({className, placeholder, value, handleSearch, handleFocus, handleBlur}) {
    return (
        <input onFocus={handleFocus} onBlur={handleBlur} value={value} placeholder={placeholder} className= {className} type="text" onChange={handleSearch} />
    )
}

export { InputBar }