import { useRef, useState, useEffect } from "react"



function Slider({data}) {
    const [isDown, setIsDown] = useState(false)
    const boxRef = useRef(null)
    const wrapperRef = useRef(null)
    const deltaPos = useRef([])
    const didMove = useRef(false)
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }, [isDown])
  
    const handleMouseDown = (e) => {
      let {left: boxX, top: boxY} = boxRef.current.getBoundingClientRect()
      //setIsDown(true)
      
      deltaPos.current = [e.clientX - boxX, e.clientY - boxY ]
    }
  
    const handleMouseMove = (e) => {
        
        if (!isDown) return 
        didMove.current = true
        let {x: wrapperX, y: wrapperY, width: wrapperW} = wrapperRef.current.getBoundingClientRect()
        let {x: boxX, width: boxW} = boxRef.current.getBoundingClientRect()
        let left = e.clientX - deltaPos.current[0]
        
        left = Math.min(left, wrapperX)
        left = Math.max(left, wrapperX + wrapperW - boxW)
        console.log(left, boxRef.current.getBoundingClientRect().x, wrapperX)
        boxRef.current.style.left = `${left - wrapperX}px`
        //boxRef.current.style.top = `${e.clientY - deltaPos.current[1] - wrapperY}px`



    }
  
    const handleMouseUp = () => {
      setIsDown(false)
      
    }

    return (
        <div ref={wrapperRef} className="slider_wrapper_wrapper">
            <div ref={boxRef} onMouseDown={handleMouseDown} className="slider_wrapper">
                {data.map(element => <div onClick={handleMouseDown} key={element.name} className='slider_item'> <img draggable={false} src={element.image} alt="" /> </div>)}
            </div>
        </div>
    )

}

export default Slider