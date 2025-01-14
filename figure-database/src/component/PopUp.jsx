function PopUp({ props, handleClose, children }) {
  return (
    <div className='PopUp_wrapper'>
      <div className='background' onClick={() => handleClose()}></div>
      {children}
    </div>
  )
}

export { PopUp }
