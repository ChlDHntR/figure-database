function DropDown({data}) {
    return (
        <div className="DropDown">
            <ul>
                {data.map((element, index) => <li key={index}> {element} </li>)}
            </ul>
        </div>
    )
}

export { DropDown }