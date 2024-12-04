import { useState } from 'react'

function InputBar({className, placeholder, value, handleSearch}) {
    return (
        <input value={value} placeholder={placeholder} className= {className} type="text" onChange={handleSearch} />
    )
}

export { InputBar }