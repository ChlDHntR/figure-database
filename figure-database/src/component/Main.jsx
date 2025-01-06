import { useState } from 'react'
import { Slider } from './Slider'
import { PopUp } from './PopUp'

function Main({ data }) {
  const [showPopUp, setShowPopUp] = useState({ show: false, data: '' })
  let popUpData = null
  if (showPopUp.show !== '') {
    popUpData = data.find((element) => element.name === showPopUp.data.name)
  }

  return (
    <div className="Main_wrapper">
      <Slider data={data} setShowPopUp={setShowPopUp}></Slider>
      {popUpData && <PopUp props={popUpData} handleClose={() => setShowPopUp({ show: false, data: '' })}></PopUp>}
    </div>
  )
}

export default Main
