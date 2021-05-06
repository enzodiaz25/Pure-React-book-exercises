import NavWithStat from "./NavWithStat"
import React from "react"

function Nav() {
    return(
        <div className="nav">
            <NavWithStat stat="37" name="Boards"/>
            <NavWithStat stat="8.9k" name="Pins"/>
            <NavWithStat stat="186" name="Likes"/>
            <NavWithStat stat="8.9k" name="Followers"/>
            <NavWithStat stat="1.8k" name="Following"/>
        </div>
    )
}

export default Nav