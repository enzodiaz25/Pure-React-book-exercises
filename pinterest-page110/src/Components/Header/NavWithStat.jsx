import React from "react"

function NavWithStat({ stat, name }) {
    return(
        <div className="item-stat-container">
            <span className="item-stat">{stat}</span>
            <p className="item-name">{name}</p>
        </div>
    )
}

export default NavWithStat