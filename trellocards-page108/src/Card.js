import React from "react"

function Card({ card }){
    return(
        <div className="card">
            <p>{card.title}</p>
        </div>
    )
}

export default Card