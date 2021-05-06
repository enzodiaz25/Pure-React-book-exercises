import React, { useReducer } from "react"
import ReactDOM from "react-dom"
import "./index.css"

// action is not needed here, but it's important
// to remember it can be used
const reducer = (state, action) => {
    switch(state.lightIntensity) {
        case "off":
            return {lightIntensity: "low"}
        case "low":
            return {lightIntensity: "mid"}
        case "mid":
            return {lightIntensity: "high"}
        case "high":
            return {lightIntensity: "off"}
        default:
            return state
    }
}

function Room() {
    const [light, dispatchLight] = useReducer(reducer, {
        lightIntensity: "off",
    })

    function handleClick(event) {
        dispatchLight()
    }
    
    return(
        <div className={`room lights-${light.lightIntensity}`}>
            <h1>Room</h1>
            <h2>Light intensity: {light.lightIntensity}</h2>
            <button onClick={handleClick}>Change intensity</button>
        </div>
    )
}

ReactDOM.render(<Room/>,
    document.getElementById("root"))
