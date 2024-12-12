
function Slider({data}) {
    const sliderList = []
    for (let i=1; i <= 10; i++) {
        let random = Math.floor(Math.random()*data.length) 
        if (!sliderList.includes(data[random])) {
            sliderList.push(data[random])
        } else {
            continue
        }
    }

    return (
        <div className="slider_wrapper">
            {sliderList.map(element => <div key={element.name} className='slider_item'> <img src={element.image} alt="" /> </div>)}
        </div>
    )

}

export default Slider