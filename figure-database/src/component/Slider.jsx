import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Slider({ data, setShowPopUp }) {
  const [isDown, setIsDown] = useState(false)
  const boxRef = useRef(null)
  const wrapperRef = useRef(null)
  const deltaPos = useRef([])
  const didMove = useRef(false)
  const sliderClass = useRef('slider_wrapper slider_transition')
  const navigate = useNavigate()

  useEffect(() => {
    let sliderRun = setInterval(() => {
      console.log(boxRef.current.getBoundingClientRect().x)
      let { x: wrapperX } = wrapperRef.current.getBoundingClientRect()
      if (isDown) return
      if (boxRef.current.getBoundingClientRect().x - wrapperX < -250 * (data.length - 6)) return
      boxRef.current.style.left = `${boxRef.current.getBoundingClientRect().x - wrapperX - 250}px`
    }, 3000)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      clearInterval(sliderRun)
    }
  }, [isDown])

  const handleMouseDown = (e) => {
    let { left: boxX, top: boxY } = boxRef.current.getBoundingClientRect()
    setIsDown(true)
    sliderClass.current = 'slider_wrapper'
    deltaPos.current = [e.clientX - boxX, e.clientY - boxY]
  }

  const handleMouseMove = (e) => {
    if (!isDown) return
    didMove.current = true
    let { x: wrapperX, y: wrapperY, width: wrapperW } = wrapperRef.current.getBoundingClientRect()
    let { x: boxX, width: boxW } = boxRef.current.getBoundingClientRect()
    let left = e.clientX - deltaPos.current[0]
    left = Math.min(left, wrapperX)
    //left = Math.max(left, wrapperX + wrapperW - boxW)
    if (left < wrapperX + wrapperW - boxW) {
      boxRef.current.style.left = `${wrapperX + wrapperW - boxW - wrapperX}px`
    } else {
      boxRef.current.style.left = `${left - wrapperX}px`
    }
    //boxRef.current.style.left = `${left - wrapperX}px`
    //boxRef.current.style.top = `${e.clientY - deltaPos.current[1] - wrapperY}px`
  }

  const handleMouseUp = (e) => {
    setIsDown(false)
    didMove.current = false
    sliderClass.current = 'slider_wrapper slider_transition'
    let { x: wrapperX, y: wrapperY, width: wrapperW } = wrapperRef.current.getBoundingClientRect()
    let { x: boxX, width: boxW } = boxRef.current.getBoundingClientRect()
    let left = boxX
    if (left <= wrapperX + wrapperW - boxW) return
    boxRef.current.style.left = `${0 - 250 * Math.round((wrapperX - left) / 250)}px`
  }

  const handleItemMouseUp = (id) => {
    if (!didMove.current) {
      //let newPopUp = { show: true, data: element }
      //setShowPopUp(newPopUp)
      navigate(`/figure/${id}`)
      console.log('click')
    }
  }

  return (
    <div ref={wrapperRef} className='slider_wrapper_wrapper'>
      <div ref={boxRef} onMouseDown={handleMouseDown} className={sliderClass.current} style={{ left: '0px' }}>
        {data.map((element) => (
          <div onMouseUp={() => handleItemMouseUp(element.id)} key={element.name} className='slider_item'>
            <img draggable={false} src={element.image} alt='' />
          </div>
        ))}
      </div>
    </div>
  )
}

export { Slider }
