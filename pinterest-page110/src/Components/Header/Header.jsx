import HeaderTitle from "./HeaderTitle"
import Nav from "./Nav"
import React from "react"

function Header() {
    return (
        <header className="header">
            <HeaderTitle/>
            <Nav/>
        </header>
    )
}

export default Header