function DropDown({data, handleClick}) {
    return (
        <div className="DropDown">
            <ul>
                {data.map((element, index) => 
                    <li onClick={() => handleClick(element.name.common)} className="search_item" key={element.name.common}> 
                        <div className="DropDown_item"> 
                            <img src={element.flags.svg} alt="" />
                            <p>{element.name.common}</p> 
                        </div> 
                    </li>)}
            </ul>
        </div>
    )
}

export { DropDown }