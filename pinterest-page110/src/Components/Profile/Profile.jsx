import Header from "../Header/Header"
import Board from "../Board/Board"
import React from "react"

function Profile({ content }) {
    return (
        <div className="profile">
            <Header/>
            <Board cards={ content.cards }/>
        </div>
    )
}

export default Profile