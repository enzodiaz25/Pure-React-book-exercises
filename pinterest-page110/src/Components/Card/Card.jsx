import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import React from "react"

function Card({ card }) {
    return (
        <article className="card">
            <CardHeader card={card} />
            <CardBody card={card} />
            <CardFooter />
        </article>
    )
}

export default Card