import PinCount from "./PinCount"
import React from "react"

function CardMainImage({ image, pinCount }) {
    return (
      <div className="card-main-image">
        <img src={image} alt="main" />
        <PinCount pinCount={pinCount}/>
      </div>
    )
}

export default CardMainImage