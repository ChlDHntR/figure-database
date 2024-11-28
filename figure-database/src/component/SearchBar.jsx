import { useState } from 'react'

function InputBar({className, placeholder, handleSearch}) {
    return (
        <input placeholder={placeholder} className= {className} type="text" onChange={handleSearch} />
    )
}

export { InputBar }