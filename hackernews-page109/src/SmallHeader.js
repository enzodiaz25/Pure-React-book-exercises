import Logo from "./Logo"
import Nav from "./Nav"
import NavItem from ".NavItem"
import React from "react"

function SmallHeader() {
    return (
        <header className="small-header">
            <Logo/>
            <Nav>
                <NavItem url="/new">new</NavItem>
                <NavItem url="/threads">threads</NavItem>
                <NavItem url="/comments">comments</NavItem>
                <NavItem url="/show">show</NavItem>
                <NavItem url="/ask">ask</NavItem>
                <NavItem url="/jobs">jobs</NavItem>
                <NavItem url="/submit">submit</NavItem>
            </Nav>
        </header>
    )
}

export default SmallHeader