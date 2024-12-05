function PopUp({props, handleClose}) {
    return(
        <div className="Country_PopUp">
            <div className="Flag">
                <img src={props.image} alt="" />
            </div>
            <div className="Info">
                <h1>Name: {props.name}</h1>
                <h2>Brand: {props.brand}</h2>
                <p>Release date: {props.date}</p>
                <p>Release price: {props.price} people</p>
            </div>
            <button onClick={handleClose}>CLOSE</button>
        </div>
    )
}

export { PopUp }