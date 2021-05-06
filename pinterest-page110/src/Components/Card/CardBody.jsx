import CardMainImage from "./CardMainImage"
import CardImageList from "./CardImageList"
import React from "react"

function CardBody({ card }) {
    return (
      <div>
        <CardMainImage image={card.images[0]} pinCount={card.pinCount}/>
        <CardImageList images={card.images.slice(1, 4)}/>
      </div>
    )
}

export default CardBody