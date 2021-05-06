import Card from "../Card/Card"
import React from "react"

function Board({ cards }){
    return (
      <main>
        <section className="board">
          {cards.map(card => (
            <Card key={card.id} card={card}/>
          ))}
        </section>
      </main>
    )
}

export default Board