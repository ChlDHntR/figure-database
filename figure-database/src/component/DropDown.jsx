function DropDown({data, handleClick}) {
    return (
        <div className="DropDown">
            <ul>
                {data.map((element, index) => <li onClick={() => handleClick(element)} className="search_item" key={index}> {element} </li>)}
            </ul>
        </div>
    )
}

export { DropDown }