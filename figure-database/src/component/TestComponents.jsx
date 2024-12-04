function PopUp({props, handleClose}) {
    return(
        <div className="Country_PopUp">
            <div className="Flag">
                <img src={props.flags.png} alt="" />
            </div>
            <div className="Info">
                <h1>Official name: {props.name.official}</h1>
                <h2>Common name: {props.name.common}</h2>
                <p>Continent: {props.continents}</p>
                <p>Population: {props.population} people</p>
            </div>
            <button onClick={handleClose}>CLOSE</button>
        </div>
    )
}

export { PopUp }