import React from "react"
import Card from "./Card"
import MoreOptionsButton from "./MoreOptionsButton"
import AddMoreButton from "./AddMoreButton"

function ListOfCards({ cardList }) {
  return (
    <div className="card-list">
      <div className="card-body">
        <div className="card-header">
          {/* FALTA EL BOTÓN "..." LUEGO DEL H2, y el Add a card al final"*/}
          <h2 className="card-list-title">{cardList.title}</h2>
          <MoreOptionsButton/>
        </div>
        {cardList.cards.map(card => {
          return <Card key={`id-${card.id}`} card={card} />
        })}
      </div>
      <AddMoreButton/>
    </div>
  )
}

export default ListOfCards