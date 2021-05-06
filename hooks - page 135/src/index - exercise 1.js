import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
    const [lights, setLights] = useState(true);

    function handleClick (){
        setLights(lights => !lights);
    }
    
    const roomLights = lights ? "light-on" : "light-off" 
    const roomText = lights ? "The room is lit" : "The room is dark"
    return (
        <button className={roomLights} onClick={handleClick}>
            {roomText}
        </button>
    )
}

ReactDOM.render(<Room/>,
    document.querySelector("#root"))