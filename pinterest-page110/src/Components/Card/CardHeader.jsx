import React from "react"

function CardHeader({ card }) {
    return(
      <div className="card-header">
        <h2 className="card-title">{card.title}</h2>
        <h3 className="card-category">{card.category}</h3>
      </div>
    )
}

export default CardHeader