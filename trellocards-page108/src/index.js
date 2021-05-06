import boardList from "./seed"
import ListOfCards from "./ListOfCards"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function Board({ boardList }) {
    return(
        <div className="board">
            {boardList.map(cardList => (
                <ListOfCards key={cardList.id} cardList={cardList}/>
            ))}
        </div>
    )
}

ReactDOM.render(<Board boardList={boardList}/>, document.getElementById("root"))