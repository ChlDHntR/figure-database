import { useState } from 'react'
import { Slider } from './Slider'
import { PopUp } from './PopUp'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments, faFire, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFire)
library.add(faStar)

function Main({ data }) {
  const [showPopUp, setShowPopUp] = useState({ show: false, data: '' })
  let popUpData = null
  if (showPopUp.show !== '') {
    popUpData = data.find((element) => element.name === showPopUp.data.name)
  }

  return (
    <div className='Main_wrapper'>
      <div className='popular_slider'>
        <h1>
          <FontAwesomeIcon icon='fa-solid fa-fire' />
          人気{'>'}{' '}
        </h1>
        <Slider data={data} setShowPopUp={setShowPopUp} interval={2000}></Slider>
      </div>
      <div className='popular_slider'>
        <h1>
          <FontAwesomeIcon icon='fa-solid fa-star' />
          今月発売{'>'}{' '}
        </h1>
        <Slider data={data} setShowPopUp={setShowPopUp} interval={2500}></Slider>
      </div>
      {popUpData && <PopUp props={popUpData} handleClose={() => setShowPopUp({ show: false, data: '' })}></PopUp>}
    </div>
  )
}

export default Main
