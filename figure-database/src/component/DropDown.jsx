function DropDown({data, handleClick}) {
    return (
        <div className="DropDown">
            <ul>
                {data.map((element, index) => 
                    <li onClick={() => handleClick(element.name)} className="search_item" key={element.name}> 
                        <div className="DropDown_item"> 
                            <img src={element.image} alt="" />
                            <p>{element.name}</p> 
                        </div> 
                    </li>)}
            </ul>
        </div>
    )
}

export { DropDown }