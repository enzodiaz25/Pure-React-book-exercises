import React from "react"

function CardImageList({ images }) {
  return (
    <div className="card-image-list">
      <div className="card-image">
        <img src={images[0]} alt="item from list" />
      </div>
      <div className="card-image">
        <img src={images[1]} alt="item from list" />
      </div>
      <div className="card-image">
        <img src={images[2]} alt="item from list" />
      </div>
    </div>
  )
}

export default CardImageList