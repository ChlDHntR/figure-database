import { useState } from "react"
import Slider from "./Slider"

function Main({data}) {
    return (
        <div className="Main_wrapper">
            <Slider data={data}></Slider>
        
        </div>
    )
}

export default Main