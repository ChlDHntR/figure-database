function PopUp({ props, handleClose }) {
  return (
    <div className="PopUp_wrapper">
      <div className="F_image">
        <img src={props.image} alt="" />
      </div>
      <div className="Info">
        <h1>Name: {props.name}</h1>
        <h2>Brand: {props.brand}</h2>
        <p>Release date: {props.date}</p>
        <p>Release price: {props.price} yen</p>
      </div>
      <button onClick={handleClose}>CLOSE</button>
    </div>
  )
}

export { PopUp }
